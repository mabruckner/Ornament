#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;
extern crate rocket_contrib;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;
extern crate ring;
extern crate rust_base58;

use rust_base58::ToBase58;

use rocket_contrib::Json;

use rocket::State;
use rocket::response::{Redirect, NamedFile};

use std::path::Path;
use std::string::String;
use std::time::SystemTime;

use std::fs::File;
use std::io::Write;

struct Listing(String);

#[derive(Serialize, Deserialize, Debug)]
struct Label {
    text: String,
    font: String,
    size: f64,
    x: f64,
    y: f64
}

#[derive(Serialize, Deserialize, Debug)]
struct Registration {
    name: Option<String>,
    code: String
}

#[derive(Serialize, Deserialize, Debug)]
struct Record {
    time: SystemTime,
    labels: Vec<Label>
}

#[get("/<file>")]
fn base(file: String) -> Option<NamedFile> {
    NamedFile::open(Path::new("customize/dist/").join(file)).ok()
}

#[get("/")]
fn index() -> Option<NamedFile> {
    NamedFile::open(Path::new("customize/dist/index.html")).ok()
}

#[post("/register", format="application/json", data="<data>")]
fn api(data: Json<Vec<Label>>) -> Json<Registration> {
    let record = Record { 
        time: SystemTime::now(),
        labels: data.0
    };
    let record = serde_json::to_string(&record).unwrap();
    let mut code = ring::digest::digest(&ring::digest::SHA256, record.as_bytes()).as_ref().to_base58();
    code.truncate(10);
    let mut file = File::create(String::from("output/") + &code + ".json").unwrap();
    file.write_all(record.as_bytes()).unwrap();
    Json(Registration { name: Some("hello".into()), code: code })
}

#[get("/listing_redirect")]
fn bounce(r: State<Listing>) -> Redirect {
    Redirect::to(&r.0)
}

fn main() {
    println!("{:?}", serde_json::to_string(&Label{ text: "asdf".into(), font: "fdsa".into(), size: 0.0, x:1.0, y:2.0}));
    let mut rock = rocket::ignite();
    let value = rock.config().extras.get("redirect").unwrap().as_str().unwrap().into();
    rock
        .mount("/api/", routes![api, bounce])
        .mount("/", routes![index, base])
        .manage(Listing(value)).launch();
}

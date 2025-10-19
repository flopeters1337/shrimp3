// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use tauri::{Builder, command, generate_handler, generate_context};

#[command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

/* Main function */
fn main() {
    Builder::default()
        .invoke_handler(generate_handler![greet])
        .run(generate_context!())
        .expect("error while running tauri application");
}

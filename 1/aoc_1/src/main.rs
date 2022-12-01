use std::fs;

fn main() {
    let input_content = fs::read_to_string("../input.txt").expect("Could not read file, oops!");

    let mut current_value = 0;
    let mut current_biggest = 0;

    for line in input_content.lines() {

        if line == "" {
            if current_value > current_biggest {
                current_biggest = current_value;
            }
            current_value = 0
        } else {
            current_value += line.parse::<i32>().expect("invalid string n0000");
        }
    }

    println!("{}", current_biggest);
}

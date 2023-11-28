use std::fs;

fn main() {
    let input_content = fs::read_to_string("../input.txt").expect("Could not read file, oops!");

    let mut current_value: usize = 0;

    let mut top3= [0, 0, 0];

    for line in input_content.lines() {

        
        if line == "" {
            let mut i = top3.len();
            println!("{}", current_value);
            loop {
                if i == 0 {
                    break;
                }
                if top3[i - 1] < current_value {
                    if (i - 1) == 2 {
                        println!("1 {}", current_value);
                        top3[0] = top3[1];
                        top3[1] = top3[2];
                        top3[2] = current_value;
                        break;
                    }
                    if (i - 1) == 1 {
                        println!("2 {}", current_value);
                        top3[0] = top3[1];
                        top3[1] = current_value;
                        break;
                    }
                    else {
                        println!("3 {}", current_value);
                        top3[0] = current_value;
                        break;
                    }
                }

                i -= 1;
            }
            
            current_value = 0
        } else {
            current_value += line.parse::<usize>().expect("invalid string n0000");
        }

        
    }

    println!("1. {}", top3[2]);
    println!("2. {}", top3[1]);
    println!("3. {}", top3[0]);

    let add = top3[2] + top3[1] + top3[0];

    println!("{}", add);
}

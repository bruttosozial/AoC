#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int three_one()
{
    int prioritySum = 0;
    std::ifstream file("./input.txt");
    string te;
    const string alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while(getline(file, te))
    {
        // cout << "Text: " + te + "\n";
        string comp1 = te.substr(0, (te.length() / 2));
        string comp2 = te.replace(0, comp1.length(), "");

        string alphabetTemp = alphabet;
        for(int i = 0; i < comp1.length(); i++)
        {
            for(int j = 0; j < comp2.length(); j++)
            {
                if(comp1[i] == comp2[j])
                {
                    int index = -1;
                    for(int a = 0; a < alphabetTemp.length(); a++)
                    {
                        if(alphabetTemp[a] == comp1[i])
                        {
                            index = a;
                            prioritySum += a + 1;
                        }
                    }
                    if(index != -1)
                    {
                        alphabetTemp = alphabetTemp.replace(index, 1, "");
                    }
                }
            }
        }
        
        // cout << "comp1: " + comp1 + "\n";
        // cout << "comp2: " + comp2 + "\n";
    }
    return prioritySum;
}

int three_two()
{
    int prioritySum = 0;
    std::ifstream file("./input.txt");
    string te;
    const string alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int index = 0;
    string backpacks[3];
    while(getline(file, te))
    {
        
        
        backpacks[index] = te;
        

        if(index == 2)
        {
            string alphabetTemp = alphabet;
            char same_candidate = -1;
            for(int i = 0; i < backpacks[0].length(); i++)
            {
                for(int j = 0; j < backpacks[1].length(); j++)
                {
                    if(backpacks[0][i] == backpacks[1][j])
                    {
                        for(int z = 0; z < backpacks[2].length(); z++)
                        {
                            if(backpacks[2][z] == backpacks[0][i])
                            {
                                int alphabetIndex = -1;
                                for(int a = 0; a < alphabetTemp.length(); a++)
                                {
                                    if(alphabetTemp[a] == backpacks[2][z])
                                    {
                                        cout << "character:";
                                        cout << backpacks[0][i];
                                        cout << "\n";
                                        cout << "Text1: " + backpacks[0] + "\n";
                                        cout << "Text2: " + backpacks[1] + "\n";
                                        cout << "Text3: " + backpacks[2] + "\n";
                                        cout << "alphabetTemp: " + alphabetTemp + "\n";
                                        alphabetIndex = a;
                                        prioritySum += a + 1;
                                    }
                                }
                                if(alphabetIndex != -1)
                                {
                                    alphabetTemp = alphabetTemp.replace(alphabetIndex, 1, "");
                                }
                            }
                        }
                    }
                }
            }
            index = -1;
        }
        index++;
    }
    return prioritySum;
}

int main(int argc, char* argv[])
{
    cout << "prioritySum: ";
    cout << three_one();
    cout << "\n";

    cout << "prioritySum2: ";
    cout << three_two();
    cout << "\n";
    
    return 0;
}

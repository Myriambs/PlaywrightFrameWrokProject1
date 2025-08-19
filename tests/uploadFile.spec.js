const { test, expect } = require('@playwright/test');
const path = require('path');

test.skip('should upload file with new tab handling', async ({ page, browser }) => {
  test.setTimeout(60000); // Set test timeout to 60 seconds
  try {
    const url = 'https://www.foundit.in/rio/sign-out';

    // Retry navigation to handle connection issues

    // Fill in the login form
    await page.fill("//input[@id='signInName']", "bensalah.meriem0@gmail.com");
    await page.waitForTimeout(2000);
    await page.click("//div[@class='loginWith']");
    await page.waitForTimeout(5000);

    await page.fill("//input[@id='password']", "azerty456.");
    await page.click("//input[@id='signInbtn']");

    // Navigate to the dashboard with extended timeout
    await page.goto('https://www.foundit.in/seeker/dashboard', { waitUntil: 'load', timeout: 5000 });

    // Wait for a specific dashboard element to appear
    await page.waitForSelector('.dashboard-content', { timeout: 5000 }); // Replace with actual selector

    // Verify the URL
    expect(page.url()).toBe('https://www.foundit.in/seeker/dashboard');

    // Get the title of the dashboard page
    const title = await page.title();
    expect(title).toBe("My Dashboard | foundit India");

    // Click on "Job Seekers"
    await page.getByText('Job Seekers', { exact: true }).click();

    // Handle the new tab opened by clicking "Upload Resume"
    const [newTab] = await Promise.all([
      page.context().waitForEvent('page'), // Wait for the new tab
      page.getByRole('link', { name: 'Upload Resume' }).click(), // Click to trigger the new tab
    ]);

    // Wait for the new tab to load
    await newTab.waitForLoadState('load');

    // Verify the new tab URL
    expect(newTab.url()).toBe('https://www.foundit.in/seeker/profile');

    // Interact with the new tab
    console.log('Navigated to new tab:', newTab.url());

    // // // Upload a file
    const filePath1 = path.resolve(__dirname, 'uploadFiles/code_changes.html');

    await newTab.locator("//input[@id='inline-resume']").setInputFiles(filePath1);
    await newTab.waitForTimeout(5000);

    // Pause for debugging
    await newTab.pause();
  } catch (err) {
    console.error('Error occurred:', err.message);
  }
});



// to upload file 
// await page.locatore("u put the div that will contain the files ").setInputFiles('path of the folder that containes the file u want to test , that is in ur project ')

// if u want to uplod many files ? 

test.skip('should upload many files', async ({ page }) => {
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  // Construct absolute paths for files
  const filePath1 = path.resolve(__dirname, 'uploadFiles/code_changes.html');
  const filePath2 = path.resolve(__dirname, 'uploadFiles/code_changes(1).html');

  console.log('Current working directory:', process.cwd());

  // Upload the files
  await page.locator("//input[@id='filesToUpload']").setInputFiles([filePath1, filePath2]);
  await page.waitForTimeout(5000);

  // // Verify files count
  const fileCount = await page.locator("//ul[@id='fileList']/li").count();
  console.log(`Uploaded file count: ${fileCount}`);
  expect(fileCount).toBe(2);

  await page.pause();
});

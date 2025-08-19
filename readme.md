# Playwright Test Automation Framework

# ![Playwright Logo](https://playwright.dev/img/playwright-logo.svg) 

A robust test automation framework built with Playwright for web application testing. 
This project demonstrates advanced automation techniques including dynamic element handling, cross-browser testing, and comprehensive reporting.

## Features

✅ **Cross-browser Testing** - Supports Chromium, Firefox, and WebKit  
✅ **Advanced Locators** - Uses semantic locators (getByRole, getByText)  
✅ **UI Component Testing** - Handles complex elements (datepickers, modals, alerts)  
✅ **Visual Testing** - Screenshot comparison on failures  
✅ **Allure Reporting** - Detailed test execution reports  
✅ **CI/CD Ready** - Configured for GitHub Actions and other CI platforms  

## Project Structure

tests
│   ├── alerte.spec.js
│   ├── Assertions.spec.js
│   ├── boostrapDropDown.spec.js
│   ├── BuildInLocator.spec.js
│   ├── datePicker.spec.js
│   ├── demoblaze.spec.js
│   ├── doubleClick.spec.js
│   ├── dropDown.spec.js
│   ├── example.spec.js
│   ├── frame.spec.js
│   ├── Hiddeninput.spec.js
│   ├── HowTotag.spec.js
│   ├── keybordAction.spec.js
│   ├── meTestWebTable.spec.js
│   ├── mouseDragandDrop.spec.js
│   ├── MouseRightClick.spec.js
│   ├── pageObject.spec.js
│   ├── playwrightHook.spec.js
│   ├── pom.spec.js
│   ├── reporter.spec.js
│   ├── screenshots
│   │   ├── homepage.png1737629671122HomePage.png
│   │   ├── homepage.png1737630030627HomePage.png
│   │   ├── homepage.png1737630355789HomePage.png
│   │   ├── homepage.png1737632036186HomePage.png
│   │   └── homepage.png1737632304779HomePage.png
│   ├── screenshots.spec.js
│   ├── testType.spec.js
│   ├── testWebtable.spec.js
│   ├── traceViewer.spec.js
│   ├── uploadFiles
│   │   ├── code_changes(1).html
│   │   ├── code_changes.html
│   │   └── resume.pdf
│   └── uploadFile.spec.js
└── tests-examples
    └── demo-todo-app.spec.js


## Setup Instructions

1. **Install Node.js** (v16+ recommended)
2. **Install dependencies**:
   ```bash
   npm install
   
3. **Install Playwright browsers**:
   ```bash
npx playwright install

4. **Running Tests**
Run all tests:

npx playwright test

5. **Run specific test file**:

npx playwright test tests/login.spec.js
6. **Run with UI mode**:

npx playwright test --ui
7. **Generate HTML report**:

npx playwright show-report

##  Key Techniques Demonstrated
1. Dynamic element waiting strategies
2. Custom utility functions for test reuse
3. Page Object Model implementation
4. Cross-browser test configuration
5. Automated screenshot capture
6. CI/CD pipeline integration

##  Dependencies
Playwright ^1.42.0
Allure Playwright ^2.0.0
Node.js 16+


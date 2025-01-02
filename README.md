# af-test

## **Commentary**

- **Data Driven:** Utilizes fixtures, allowing for multiple test scenarios to be added simply.
- **Page Object Models (POMs):** Employed for test maintainability and scalability. Selectors are centralized, and method logic is clearer, making test steps more readable. Since each click through the quote effectively navigated to a different page, I chose to organize these into a subfolder for a cleaner structure.
- **Assertions:** The flow as requested in test instructions ended after selecting a breed/sub breed, so the only assertion on that page is to check the URL. This can be expanded to include more detailed assertions on the page if the flow continues or if there's a specific use case to verify at the test's termination point. Utilize fluent assertion libraries where necessary to achieve this.
- **Linting and Formatting:** Basic linting setup and Prettier configuration were added, along with a pre-commit Husky hook to enforce code standards.

## **Additional Tasks and Improvements to Undertake**

- **Cross browser Tests:**
  - Current solution only tested in Chrome. Expand to other browsers - introduce parallelization for faster execution.

- **Componentize Tests:**
  - Test pages in isolation (ie edge, happy cases etc) rather than fully end-to-end (E2E). This would still leave the E2E flow intact but allow for some granular testing whilst balancing execution time. Inclusive of mocking where applicable. 
  
- **Refine Page Object Models (POMs):**
  - Depending on the scope and size of the suite, centralize the instantiation of POMs to enhance scalability and maintainability.
  
  - **BDD:**
  - Not a neccessity but a consideration - If there is wider non-technical team involvement, consider implementing BDD to improve readability and team collaboration. If there is unlikely to be non-technical team involvement, this may add unnecessary complexity and overhead to test scripting. 

  
- **Review Using Application Actions alongside POM:**
  - Assess the scalability of incorporating application actions with POM.
  - They can improve test performance and reusability by reducing code duplication.
  - **note:** Potential added complexity when setting up so balanced vs scale of test suite and higher abstraction levels may reduce readability of the tests.
  
- **Dynamic Data Management:**
  - For more complex or dynamic data in larger suites, consider implementing a builder pattern or similar for managing extensive data sets.
  
- **Date Picker Refactor:**
  - Refactor the current implementation to ensure scalability.
  - Aim for a more dynamic approach where exact dates aren't hardcoded, allowing flexibility in test flows.
  - **Helper Class Consideration:** If similar date pickers exist in other site areas using the same selectors/mappings, centralize this functionality within a helper class.
  
- **Improved Error Handling and Logging:**
  - Enhance error handling across the test suite.
  - Ensure data existence is verified before usage to prevent errors.
  
- **Improve Reporting:**
  - Integrate reporting tools like Allure.
  
- **CI/CD Integration:**
  - Implement tests as part of a CI/CD pipeline.
  - Include parallelization of tests, especially for data-driven tests, using tools like `cypress-parallel`.
  
- **Page Transition Validation:**
  - Add validations for page transitions before proceeding with test steps.
  - Examples include checking the page title, URL, and ensuring essential elements are loaded.
  
- **Accessibility and Performance Testing:**
  - Depending on test scope, consider integrating tools like Lighthouse API or Axe Core for accessibility testing, or Artillery for performance testing.
  - **Note:** Balance these additions as they may increase run time and test complexity, potentially better suited for isolated test suites.
  
- **Robust Environment Management:**
  - Implement a more robust environment management system.
  - Ideally, create a helper class to manage different environments efficiently.
  
- **URL Management Helper:**
  - Add a helper class for managing URLs, covering both API and web-based endpoints.
  
- **Centralize Mappings:**
  - Consolidate mappings across various POMs into a `utils` folder for easier management and consistency.
  
- **Utilize Custom Commands:**
  - Create custom commands for repetitive sequences across tests.
  - **Examples:**
    - **Date Picker:** Implement as a custom command to handle dynamic date selections.
    - **Click Continue:** Reduce code duplication by abstracting this action into a reusable command.
  
- **Improve Test Dynamics:**
  - Enhance test titles to include unique identifiers relevant to each test.
  - Would solve the current Looping through titles based on fixture data groups tests under the same title in reports.
  
- **Polling and Waits Review:**
  - Reassess polling and waiting mechanisms.
  - **Example:** The current polling for the cookie banner was added due to loading time issues where banner would load after the test started, causing test failures when the banner appeared unexpectedly. Keep an eye on this implementation and assess impact on test run time
  
- **Global Component Enhancements:**
  - Elements like "click continue" exist in the `QuoteBase` page but could be expanded into a base class globally if reused in other site areas.
  
- **Reusable Authentication:**
  - Not applicable to this test, but for scenarios requiring user login, ensure that reusable authentication mechanisms are in place to avoid logging in for each test individually.
  
- **Handle Flaky Tests:**
  - Implement retry mechanisms to handle flaky tests.
  - Capture and log flaky tests to monitor, remove, or update them as necessary.
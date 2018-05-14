/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('has URL defined', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].hasOwnProperty("name")).toBe(true);
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
                expect(allFeeds[i].hasOwnProperty("url")).toBe(true);
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
        });
            




        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });

    describe('The menu', function() {
        let body = document.body;
        let hiddenMenu = document.querySelector(".menu-hidden");
        let iconList = document.querySelector(".icon-list");

        it("is hidden by default", function() {
            expect(body).toEqual(hiddenMenu);
        });
      
        it("appears when clicked", function() {
            iconList.click();
            expect(body.classList.contains(".menu-hidden")).toBe(false);
        });
        it("disappears when clicked again", function() {
            iconList.click();
            iconList.click();
            expect(body.classList.contains(".menu-hidden")).toBe(false);
            iconList.click();

        });
     });
    

     describe("Initial Entries", function() {
        


        beforeEach(function(done) {
            setTimeout(function() {
                  loadFeed(0);
                  done();
                }, 2);
              });    

        

        it("feed is loaded", function(done) {
            let feedChildNodes = document.querySelector(".feed").childNodes[1].childNodes[1];
            let entry = document.querySelector(".entry");
             
             expect(feedChildNodes).toBeEqual(entry);
             done();
         });

        
     });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());

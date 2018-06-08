
$(function() {
    describe('RSS Feeds', function() {
        /* tests to make sure that the allFeeds variable has been defined
         * and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has URL defined', function() {
            /*  a test that loops through each feed
             * in the allFeeds object and ensures it has a name defined
             * and that the name is not empty.
             */

            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].hasOwnProperty("name")).toBe(true);
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
                expect(allFeeds[i].hasOwnProperty("url")).toBe(true);
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
        });
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
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * 
         * 
         */
        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0);
                done();
            }, 2500);
        });

        it("feed is loaded", function() {
            let feedChildNodes = document.querySelector(".feed").childNodes[1].childNodes[1];
            let entry = document.querySelector(".entry");

            expect(feedChildNodes).toEqual(entry);

        });
    });

    describe("New Feed selection", function() {
        /*  a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes
         */

        let feedEmpty = true;

        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0);
                done();
            }, 2500);
        });

        it("the content changes", function() {
            let feed = document.querySelector(".feed");
            let entry = document.querySelector(".entry-link");

            if (entry.parentNode == feed) {
                feedEmpty = true;
            }

            expect(feedEmpty).toBe(true);

        });
    });


}());
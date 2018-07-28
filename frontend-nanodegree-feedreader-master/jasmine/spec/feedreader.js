$(function() {
    describe('RSS Feeds', function() {
        it('names are defined', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined(); // the current allFeeds entry's name is defined
                expect(allFeeds[i].name.length).toBeGreaterThan(0); // the current allFeeds entry's name is longer than 0
            }
        });

        it('url is defined', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined(); // the current allFeeds url is defined
                expect(allFeeds[i].url.length).toBeGreaterThan(0); //the current allFeeds entry's name is longer than 0
            }
        });
        // test to make sure that the allFeeds variable has been defined and that it is not empty
        it('is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        })
    });

    describe('The menu', function() {
        // tests to make sure that the menu is hiddeny by default and it appears / disappears when it's clicked again

        let menuIcon = document.querySelector(".menu-icon-link");
        let body = document.body;


        it("is hidden by default", function() {
            expect($(body).hasClass(".menu-hidden")).toBe(true);
        });

        it("appears when clicked", function() {
            menuIcon.click();
            expect($(body).hasClass(".menu-hidden")).toBe(false);
        });

        it("disappears when clicked again", function() {
            menuIcon.click();
            expect($(body).hasClass(".menu-hidden")).toBe(true);
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
            loadFeed(0, done);
        });


        it("feed is loaded", function() {
            let feedAndEntry = document.querySelector(".feed .entry");
            expect($(feedAndEntry).length).toBeTruthy();
        });
    });

    describe("New Feed selection", function() {
        //  a test that ensures when a new feed is loaded by the loadFeed function and that the content actually changes
        let firstFeed = "";

        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = $(".feed").html();
                loadFeed(2, function() {
                    done();
                });
            });
        });

        it("the content changes", function() {
            expect($('.feed')).not.toEqual(firstFeed)
        });
    });


}());
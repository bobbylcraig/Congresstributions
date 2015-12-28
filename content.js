var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            
            var senatorName = [
                // A
                "Ralph Abraham", "Alma Adams", "Robert Aderholt", "Pete Aguilar", "Andrew Alexander", "Rich Allen", "Justin Amash", "Aumua Amata", "Mark Amodei",
                // B
                "Brian Babin", "Tammy Baldwin", "Lou Barletta", "Andy Barr", "John Barrasso", "Joe Barton", "Karen Bass",
                    "Joyce Beatty", "Xavier Becerra", "Dan Benishek", "Michael Bennet", "Ami Bera", "Donald Beyer", "Gus Bilirakis",
                    "Sanford Bishop", "Rob Bishop", "Mike Bishop", "Diane Black", "Marsha Blackburn",
                    "Rod Blum", "Earl Blumenauer", "Richard Blumenthal", "Roy Blunt", "Suzanne Bonamici", "Cory Booker", "John Boozman",
                    "Madeleine Bordallo", "Mike Bost", "Charles Boustany", "Barbara Boxer", "Brendan Boyle",
                    "Bob Brady", "Kevin Brady", "Dave Brat", "Jim Bridenstine", "Mo Brooks",
                    "Susan Brooks", "Corrine Brown", "Sherrod Brown", "Julia Brownley", "Vern Buchanan", "Ken Buck",
                    "Larry Bucshon", "Michael Burgess", "Richard Burr", "Cheri Bustos", "George Butterfield", "Bradley Byrne",
                // C
                "Ken Calvert", "Maria Cantwell", "Shelley Capito", "Lois Capps", "Mike Capuano", "Ben Cardin", "John Carney", "Tom Carper", "André Carson", 
                    "John Carter", "Earl Carter", "Buddy Carter", "Matt Cartwright", "Bob Casey", "Bill Cassidy", "Kathy Castor", 
                    "Joaquin Castro", "Steve Chabot", "Jason Chaffetz", "Judy Chu", "David Cicilline", "Katherine Clark", "Yvette Clark", 
                    "Curt Clawson", "William Clay", "Emanuel Cleaver", "Jim Clyburn", "Daniel Coats", 
                    "William Cochran", "Mike Coffman", "Steven Cohen", "Tom Cole", "Doug Collins", "Chris Collins", 
                    "Susan Collins", "Barbara Comstock", "Mike Conaway", "Gerry Connolly", "John Conyers", "Paul Cook", "Chris Coons",
                    "Jim Cooper", "Bob Corker", "John Cornyn", "Jim Costa", "Ryan Costello", "Tom Cotton", "Joe Courtney",
                    "Kevin Cramer", "Mike Crapo", "Rick Crawford", "Ander Crenshaw", "Joe Crowley", "Ted Cruz", "Henry Cuellar", "John Culberson", "Elijah Cummings", 
                    "Carlos Curbelo", "Tony Cárdenas",
                // D
                "Steve Daines", "Rodney Davis", "Susan Davis", "Danny Davis", "Peter DeFazio", "Diana DeGette", "Rosa DeLauro", 
                    "Ron DeSantis", "Mark DeSaulnier", "Susan DelBene", "John Delaney", "Jeff Denham", "Charlie Dent", 
                    "Scott DesJarlais", "Theodore Deutch", "Mario Diaz-Balart", "Debbie Dingell", "Lloyd Doggett", "Robert Dold", 
                    "Joe Donnelly", "Daniel Donovan", "Mike Doyle", "Tammy Duckworth", "Sean Duffy", "Jeff Duncan", "Jimmy Duncan", 
                    "Dick Durban",
                // E
                "Donna Edwards", "Keith Ellison", "Renee Ellmers", "Tom Emmer", "Eliot Engel", "Mike Enzi", "Joni Ernst", "Anna Eshoo", "Elizabeth Esty",
                // F
                "Blake Farenthold", "Sam Farr", "Chaka Fattah", "Dianne Feinstein", "Stephen Fincher", "Deb Fischer", "Mike Fitzpatrick", "Jeff Flake", "Chuck Fleischmann",
                    "John Fleming", "Bill Flores", "Randy Forbes", "Jeff Fortenberry", "Bill Foster", "Virginia Foxx", "Louis Frankel", "Al Franken",
                    "Trent Franks", "Rodney Frelinghuysen", "Marcia Fudge",
                // G    
                "Tulsi Gabbard", "Ruben Gallegro", "John Garamendi", "Cory Gardner", "Ernest Garrett",
                    "Bob Gibbs", "Chris Gibson", "Kirsten Gillibrand", "Louie Gohmert", "Bob Goodlatte", "Paul Gosar", "Trey Gowdy", "Gwen Graham",
                    "Lindsey Graham", "Kay Granger", "Chuck Grassley", "Tom Graves", "Garret Graves", "Sam Graves", "Alan Grayson",
                    "Gene Green", "Al Green", "Morgan Griffith", "Raúl Grijalva", "Glenn Grothman", "Frank Guinta", "Brett Guthrie", "Luis Gutiérrez",
                // H
                
                ];
            
            
            var senatorOrg = [
                // A
                "American Sugar Cane League", "Emily's List", "Parker Towing", "J Street", "International Paper", "Rw Allen", "Club for Growth", "None Listed", "Sierra Nevada Corporation",
                // B
                "Citigroup", "Emily's List", "Savills Studley Incorporated", "Alliance Coal", "Richie's Specialty Pharmacy", "Oil City Iron Works", "Sony Pictures Entertainment",
                    "L Brands", "Oaktree Capital Management", "Amwayalticor Incorporated", "Brownstein Hyatt Farber Schreck", "J Street", "Akin Gump", "Marathon Petroleum",
                    "Laborers' International Union of North America", "National Cattlemen's Beef Association", "Mckinley Association", "Southland Constructors", "Marathon Petroleum",
                    "Eagle Point", "Nike Incorporated", "Cablevision Systems", "Enterprise Rent-A-Car", "Nike Incorporated", "NORPAC", "Walmart",
                    "Northrop Grumman", "Maclean Fogg Company", "Charter Brokerage LLC", "Emily's List", "International Union of Bricklayers and Allied Craftworkers",
                    "Laborers' International Union of North America", "Anadarko Petroleum", "Senate Conservatives Fund", "American Optometric Association", "Dynetics Incorporated",
                    "Barnes And Thornburg", "Florida Rock Industries", "Ohio State University", "Emily's List", "Florida Cancer Specialists", "Hensel Phelps Construction",
                    "Murray Energy Corporation", "American Academy of Otolaryngology - Head and Neck Surgery", "New Breed", "J Street", "Merck", "Pilot Catastrophe Services",
                // C
                "General Atomics", "Microsoft", "Sullivan and Cromwell", "J Street", "Thornton and Naumes", "Ernst & Young", "Young Conaway Et Al", "J.P. Morgan Chase", "Rolls Royce North America",
                    "Bollinger Shipyards", "Rite Aid Corporation", "Rite Aid Corporation", "Odonnell Law Offices", "Comcast", "Edison Chouest Offshore", "Cox Enterprises",
                    "Northrup Grumman", "American Financial Group", "Home Depot", "Advanced Diagnostic And Surgery Ctr", "Gtech Corporation", "Emily's List", "International Union of Bricklayers and Allied Craftworkers",
                    "Skadden, Arps, Slate, Meagher & Flom", "Credit Union National Association", "Plumbers-Pipefitters Union Local 533", "Northwestern Mutual", "Barnes And Thornburg",
                    "General Atomics", "Bartlit Beck Et Al", "Enterprise Rent a Car", "Chickasaw Nation", "National Community Pharmacists Association", "Delaware North Companies", 
                    "DLA Piper", "Elliott Management", "National Association of Broadcasters", "ICF International", "Dish Network", "Cemex Incorporated", "Young Conaway Et Al",
                    "Bass Berry And Sim's", "Powell Construction", "AT&T", "Pachulski Stang Et Al", "Valley Forge Investment", "Club for Growth", "General Dynamics",
                    "Oasis Petroleum", "Amgen", "Riceland Foods", "General Dynamics", "Citigroup", "Club for Growth", "Geo Group", "BP", "Edison Chouest Offshore",
                    "MCM Corporation", "St. Jude Medical",
                // D
                "Elliott Management", "McDonalds Corporation", "Honeywell", "National Rural Letter Carriers' Association", "Airlines for America", "Democracy Engine", "Democracy Engine", 
                    "Island Doctors", "International Brotherhood of Electrical Workers", "Microsoft", "Blackrock Incorporated", "BNSF Railway", "Air Products and Chemicals Incorporated", 
                    "NHC Healthcare", "NORPAC", "Leon Medical Centers", "Emily's List", "International Association of Machinists and Aerospace Workers", "Kirkland & Ellis",
                    "AM General Corporation", "None Listed", "United Association", "Express Scripts", "Greenheck Fan Corporation", "National Healthcare Corporation", "Deroyal Industries",
                    "Simmons Law Firm",
                // E
                "Emily's List", "TCF Financial", "Home Depot", "Slumberland", "St Georges University", "Peabody Energy", "Senate Conservatives Fund", "Google", "Sidley Austin",
                // F
                "Haas Anderson Construction", "Ocean Mist Farms", "Comcast", "PG&E", "Clayton Homes", "Senate Conservatives Fund", "ACE Group", "Club for Growth", "Deroyal Industries",
                    "Atco Investment", "Freeport Mcmoran Oil and Gas", "Huntington Ingalls Industries", "Union Pacific", "J Street", "Full Sail", "Florida Crystals", "Susman Godfrey LLP",
                    "Honeywell", "Lockheed Martin", "McDonalds Corporation",
                // G
                "Navatek Ltd", "United Food and Commercial Workers International Union", "International Brotherhood of Electrical Workers", "Club for Growth", "Elliott Management",
                    "Timken Company", "Elliott Management", "Boies Schiller And Flexner", "First State Bank And Trust", "Oracle", "Pinnacle West Capital", "UBS", "Emily's List",
                    "SCANA Corporation", "Lockheed Martin", "Leon Medical Centers", "Textile Rubber And Chemical Company", "Daybrook Fisheries", "Norfolk Southern", "American Association for Justice",
                    "Ocean Shipholdings", "Harmony Public Schools", "National Automobile Dealers Association", "Air Line Pilots Association", "Michels", "Massmutual", "Society of Interventional Radiology", "Laborers' International Union of North America",
                // H
                
                ];
            
            
            for ( var k = 0; k < senatorName.length; k++) {
                var replacedText = text.replace(senatorName[k], senatorName[k] + " " + "{" + senatorOrg[k] + "}");
                if (replacedText !== text) {element.replaceChild(document.createTextNode(replacedText), node);}
            }
        }
    }
}
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
                    "Curt Clawson", "William Clay", "Emanuel Cleaver", "Jim Clyburn", "Dan Coats", 
                    "Thad Cochran", "Mike Coffman", "Steven Cohen", "Tom Cole", "Doug Collins", "Chris Collins", 
                    "Susan Collins", "Barbara Comstock", "Mike Conaway", "Gerry Connolly", "John Conyers", "Paul Cook", "Chris Coons",
                    "Jim Cooper", "Bob Corker", "John Cornyn", "Jim Costa", "Ryan Costello", "Tom Cotton", "Joe Courtney",
                    "Kevin Cramer", "Mike Crapo", "Rick Crawford", "Ander Crenshaw", "Joe Crowley", "Ted Cruz", "Henry Cuellar", "John Culberson", "Elijah Cummings", 
                    "Carlos Curbelo", "Tony Cárdenas",
                // D
                "Steve Daines", "Rodney Davis", "Susan Davis", "Danny Davis", "Peter DeFazio", "Diana DeGette", "Rosa DeLauro", 
                    "Ron DeSantis", "Mark DeSaulnier", "Susan DelBene", "John Delaney", "Jeff Denham", "Charlie Dent", 
                    "Scott DesJarlais", "Theodore Deutch", "Mario Diaz-Balart", "Debbie Dingell", "Lloyd Doggett", "Robert Dold", 
                    "Joe Donnelly", "Daniel Donovan", "Mike Doyle", "Tammy Duckworth", "Sean Duffy", "Jeff Duncan", "Jimmy Duncan", 
                    "Dick Durbin",
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
                "Janice Hanh", "Richard Hanna", "Cresent Hardy", "Gregg Harper", "Andy Harris", "Vicki Hartzler", 
                    "Alcee Hastings", "Orrin Hatch", "Joseph Heck", "Denny Heck", "Martin Heinrich", "Heidi Heitkamp", "Dean Heller", 
                    "Jeb Hensarling", "Jaime Herrera Beutler", "Jody Hice", "Brian Higgins", "French Hill", "Jim Himes", "Rubén Hinojosa", "Mazie Hirono", 
                    "John Hoeven", "George Holding", "Mike Honda", "Steny Hoyer", "Richard Hudson", "Tim Huelskamp", "Jared Huffman",
                    "Bill Huizenga", "Randy Hultgren", "Duncan Hunter", "Will Hurd", "Robert Hurt",
                // I
                "Jim Inhofe", "Johnny Isakson", "Steve Israel", "Darrell Issa",
                // J
                "Sheila Jackson Lee", "Hakeem Jeffries", "Evan Jenkins", "Lynn Jenkins", "Bill Johnson", "Ron Johnson", "Sam Johnson",
                    "Eddie Bernice Johnson", "Hank Johnson", "David Jolly", "Walter Jones", "Jim Jordan", "David Joyce", 
                // K    
                "Tim Kaine", "Marcy Kaptur", "John Katko", "Bill Keating", "Mike Kelly", "Robin Kelly", 
                    "Trent Kelly", "Joe Kennedy", "Daniel Kildee", "Derek Killmer", "Ron Kind", 
                    "Angus King", "Steve King", "Pete King", "Adam Kinzinger", "Mark Kirk", "Ann Kirkpatrick", "John Kline",
                    "Amy Klobuchar", "Stephen Knight", "Ann Kuster",
                // L
                "Darin LaHood", "Doug LaMalfa", "Raúl Labrador", "Doug Lamborn", "Leonard Lance", "Jim Langevin", 
                    "James Lankford", "Rick Larsen", "John Larson", "Bob Latta", "Brenda Lawrence", "Patrick Leahy", "Mike Lee", "Barbara Lee", 
                    "Sandy Levin", "John Lewis", "Ted Lieu", "Dan Lipinski", "Frank LoBiondo", 
                    "Dave Loebsack", "Zoe Lofgren", "Billy Long", "Barry Loudermilk", "Mia Love", "Alan Lowenthal", "Nita Lowey", 
                    "Frank Lucas", "Blaine Luetkemeyer", "Michelle Lujan Grisham", "Ben Ray Luján", "Cynthia Lummis", "Stephen Lynch",
                // M
                "Thomas MacArthur", "Sean Maloney", "Carolyn Maloney", "Joe Manchin", "Kenny Marchant", "Tom Marino", "Ed Markey", 
                    "Thomas Massie", "Doris Matsui", "John McCain", "Kevin McCarthy", "Claire McCaskill", "Michael McCaul", "Tom McClintock",
                    "Betty McCollum", "Mitch McConnel", "Jim McDermott", "Jim McGovern", "Patrick McHenry", "David McKinley", 
                    "Cathy McMorris Rodgers", "Jerry McNerney", "Martha McSally", "Mark Meadows", "Patrick Meehan", "Gregory Meeks", "Grace Meng", 
                    "Bob Menéndez", "Jeff Merkley", "Luke Messer", "John Mica", "Barbara Mikulski", "Candice Miller", "Jeff Miller", 
                    "John Moolenaar", "Alex Mooney", "Gwen Moore", "Jerry Moran", "Seth Moulton", "Markwayne Mullin", 
                    "Mick Mulvaney", "Lisa Murkowski", "Patrick Murphy", "Tim Murphy", "Chris Murphy", "Patty Murray",
                // N
                "Jerry Nadler", "Grace Napoitano", "Richard Neal", "Bill Nelson", "Randy Neugebauer", "Dan Newhouse", "Kristi Noem",
                    "Rick Nolan", "Donald Norcross", "Eleanor Holmes Norton", "Rich Nugent", "Devin Nunes", 
                // O
                "Beto O'Rourke", "Pete Olson", 
                // P
                "Steven Palazzo", "Frank Pallone", "Gary Palmer", "Bill Pascrell", "Rand Paul", "Erik Paulsen", 
                    "Donald Payne", "Steve Pearce", "Nancy Pelosi", "David Perdue", "Ed Perlmutter", 
                    "Scott Perry", "Scott Peters", "Gary Peters", "Collin Peterson", "Pedro Pierluisi", "Chellie Pingree", 
                    "Robert Pittenger", "Joe Pitts", "Stacey Plaskett", "Mark Pocan", 
                    "Ted Poe", "Bruce Poliquin", "Jared Polis", "Mike Pompeo", "Rob Portman", "Bill Posey", "David Price", "Tom Price",
                // Q
                "Mike Quigley",
                // R
                "Charlie Rangel", "John Ratcliffe", "Tom Reed", "Jack Reed", "David Reichert", "Harry Reid", "Jim Renacci", 
                    "Reid Ribble", "Tom Rice", "Kathleen Rice", "Cedric Richmond", "Scott Rigell", "Jim Risch", 
                    "Pat Roberts", "Martha Roby", "Phil Roe", "Mike Rogers", "Hal Rogers", "Dana Rohrabacher", "Todd Rokita", "Tom Rooney", 
                    "Ileana Ros-Lehtinen", "Peter Roskam", "Dennis Ross", "Keith Rothfus", "Mike Rounds", "David Rouzer", "Lucille Roybal-Allard", 
                    "Ed Royce", "Marco Rubio", "Raul Ruiz", "Dutch Ruppersberger", "Bobby Rush", "Steve Russell", "Tim Ryan", "Paul Ryan"
                // S
                "Kilili Sablan", "Matt Salmon", "Loretta Sanchez", "Bernie Sanders", "Mark Sanford", "John Sarbanes", "Ben Sasse", 
                    "Steve Scalise", "Jan Schakowsky", "Brian Schatz", "Adam Schiff", "Kurt Schrader", "Chuck Schumer", 
                    "David Schweikert", "Austin Scott", "Tim Scott", "David Scott", "Bobby Scott", "Jim Sensenbrenner",
                    "José Serrano", "Pete Sessions", "Jeff Sessions", "Terri Sewell", "Jeanne Shaheen", "Richard Shelby", 
                    "Brad Sherman", "John Shimkus", "Bill Shuster", "Mike Simpson", "Kyrsten Sinema", "Albio Sires",
                    "Louise Slaughter", "Jason Smith", "Chris Smith", "Lamar Smith", "Adam Smith", "Adrian Smith", 
                    "Jackie Speier", "Debbie Stabenow", "Elise Stefanik", "Chris Stewart", "Steve Stivers", "Marlin Stutzman", 
                    "Daniel Sullivan", "Eric Swalwell", "Linda Sánchez", 
                // T
                "Mark Takai", "Mark Takano", "Jon Tester", "Mike Thompson", "Bennie Thompson", "Glenn Thompson", "Mac Thornberry", 
                    "John Thune", "Pat Tiberi", "Thom Tillis", "Scott Tipton", "Dina Titus", "Paul Tonko", "Patrick Toomey", 
                    "Norma Torres", "David Trott", "Niki Tsongas", "Mike Turner",
                // U
                "Tom Udall", "Fred Upton", 
                // V
                "David Valadao", "Chris Van Hollen", "Juan Vargas", "Marc Veasey", "Filemon Vela", "Nydia Velázquez", "Pete Visclosky", 
                    "David Vitter",
                // W
                "Ann Wagner", "Tim Wahlberg", "Greg Walden", "Mark Walker", "Jackie Walorski",
                    "Mimi Walters", "Tim Walz", "Mark Warner", "Elizabeth Warren", "Debbie Wasserman Schultz", "Maxine Waters", 
                    "Bonnie Watson Coleman", "Randy Weber", "Daniel Webster", "Peter Welch", "Brad Wenstrup", "Bruce Westerman", 
                    "Lynn Westmoreland", "Sheldon Whitehouse", "Ed Whitfield", "Roger Wicker", "Roger Williams", "Frederica Wilson",
                    "Joe Wilson", "Robert Wittman", "Steve Womack", "Rob Woodall", "Ron Wyden",
                // Y
                "John Yarmuth", "Kevin Yoder", "Ted Yoho", "Todd Young", "David Young", "Don Young",
                // Z
                "Lee Zeldin", "Ryan Zinke"
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
                "Cooperative of American Physicians", "International Union of Operating Engineers", "Las Vegas Sands", "AT&T", "Greater Houston Anesthesiology", "American Society of Anesthesiologists",
                    "United States Sugar", "Cerberus Capital Management", "Las Vegas Sands", "Boeing", "League of Conservation Voters", "Motley Rice Llc", "Las Vegas Sands",
                    "J.P. Morgan Chase", "Northrup Grumman", "Atlanta Communities", "Honeywell", "Stephens Incorporated", "Goldman Sachs", "Link Group", "Emily's List",
                    "Murray Energy Corporation", "Ward And Smith", "Integral Communities", "Exelon", "Hendrick Automotive", "College Loan Corporation", "American Crystal Sugar",
                    "Haworth Incorporated", "International Union of Operating Engineers", "Edison Chouest Offshore", "KPMG", "Capital One Financial Corporation",
                // I
                "Devon Energy", "Home Depot", "Rubies Costume Company", "Wilmerhale",
                // J
                "Communications Workers of America", "Paul Weiss Et Al", "Steptoe And Johnson", "QC Holdings", "Brilex Industries", "Fiduciary Management", "Council of Insurance Agents and Brokers",
                    "Northrup Grumman", "American Crystal Sugar", "Van Scoyoc Associates", "Democracy Engine", "Cooper Farms", "RPM International",
                // K    
                "League of Conservation Voters", "Forest City Enterprises", "Pyramid Companies", "United Food and Commercial Workers International Union", "UPS", "United Food and Commercial Workers International Union",
                    "None Listed", "Highfields Capital Management", "International Brotherhood of Electrical Workers", "League of Conservation Voters", "Northwestern Mutual",
                    "Democracy Engine", "Citizens United", "International Union of Operating Engineers", "Exelon", "Kirkland & Ellis", "Emily's List", "Apollo Education Group",
                    "Dorsey and Whitney", "Hunter Dodge", "J Street", 
                // L
                "None Listed", "Ernst & Young", "Melaleuca Incorporated", "Duty Free Americas", "International Union of Operating Engineers", "General Dynamics",
                    "Devon Energy", "BNSF Railway", "Massmutual", "Marathon Petroleum", "Emily's List", "Girardi And Keese", "Apex Alarm", "San Francisco Regional Center",
                    "Prudential Financial", "United Food and Commercial Workers International Union", "Munger Tolles and Olson", "United Association", "United Airlines",
                    "University of Iowa", "Google", "National Association of Broadcasters", "Club for Growth", "Koch Industries", "American Crystal Sugar", "Alzheimers Impact Movement", 
                    "Tom James Company", "Independent Insurance Agents & Brokers of America", "New York Life", "Blue Crossblue Shield Of Illinois", "Halliburton Company", "G And C Concrete Construction", 
                // M
                "York Risk Services Group", "New York Life", "Investment Company Institute", "Firstenergy Corporation", "UBS", "Henry Dunn Incorporated", "League of Conservation Voters", 
                    "Fischer Homes", "PG&E", "Pinnacle West Capital", "Farmers Insurance Group", "Emily's List", "Duty Free Americas", "Quest Media And Supplies",
                    "Heartland Realty Investors", "Blackstone", "United Food and Commercial Workers International Union", "Union Pacific", "Signature Bank", "CONSOL Energy",
                    "Nelson Irrigation", "International Brotherhood of Teamsters", "Elliott Management", "NORPAC", "Boeing", "Rent A Center", "Spa Castle",
                    "Lowenstein Sandler", "League of Conservation Voters", "Heritage Group", "Wayne Densch Incorporated", "Harris Corporation", "Ilitch Holdings", "BAE Systems",
                    "Dow Chemical Company", "Murray Energy Corporation", "Federated Investors Incorporated", "Koch Industries", "Democracy Engine", "Devon Energy",
                    "Blue Crossblue Shield Of South Carolina", "Edison Chouest Offshore", "Coastal Construction Group", "Koppers Incorporated", "Moveon.org", "Microsoft",
                // N
                "Windmill Distributing Company", "Air Line Pilots Association", "Massmutual", "Morgan And Morgan", "BNY Mellon", "American Crystal Sugar", "Blackstone", 
                    "Heartland Realty Investors", "International Brotherhood of Electrical Workers", "Savills Studley Incorporated", "Publix", "California Dairies, Inc.",
                // O
                "Sheet Metal Workers' International Association", "Pro Compounding Centers of America", 
                // P
                "Huntington Ingalls Industries", "Verizon Communications", "Club for Growth", "Bio Reference Laboratories", "Club for Growth", "Deloitte",
                    "International Brotherhood of Teamsters", "Yates Petroleum", "Facebook Incorporated", "Club for Growth", "Brownstein Hyatt Farber Schreck", 
                    "Exelon", "J Street", "League of Conservation Voters", "United Association", "Northwestern Selecta", "International Association of Machinists and Aerospace Workers", 
                    "American Bankers Association", "American Health Care Association", "None Listed", "International Association of Machinists and Aerospace Workers", 
                    "Cai Industries", "Zweig Dimenna Association", "SPS Studios", "Koch Industries", "Citigroup", "Harris Corporation", "Duke University", "Peachtree Orthopaedic Clinic",
                // Q
                "Northrop Grumman", 
                // R
                "Greater New York Hospital Association", "Club for Growth", "Elliott Management", "Metlife", "Weyerhaeuser", "Weitz And Luxenberg", "Timken Company", 
                    "Schneider National", "Cl Benton And Sons", "First Nationwide Title Agency", "Marathon Petroleum", "Norfolk Southern", "Honeywell", 
                    "Burns and Mcdonnell", "UPS", "Powell Construction", "Boeing", "American Crystal Sugar", "Pelican Point Capital", "Kirkland & Ellis", "United Technologies",
                    "Rosen Partners", "Exelon", "Publix", "Federated Investors Incorporated", "Citigroup", "American Crystal Sugar", "National Air Traffic Controllers Association", 
                    "NORPAC", "Club for Growth", "J Street", "Mantech International", "CSX", "State Of Oklahoma", "Credit Union National Association", "Northwestern Mutual"
                // S
                "Tan Holdings", "Nextmed", "Aitken Aitken And Cohn", "Communications Workers of America", "Zeus Incorporated", "Venable Llp", "Club for Growth",
                    "Edison Chouest Offshore", "J Street", "League of Conservation Voters", "Quinn Emanuel Et Al", "Washington State University", "Paul Weiss Et Al",
                    "National Beer Wholesalers Association", "UPS", "Club for Growth", "International Brotherhood of Electrical Workers", "Dominion", "National Beer Wholesalers Association",
                    "Service Employees International Union", "AT&T", "McWane Incorporated", "Davis Polk And Wardwell", "Emily's List", "Travelers", 
                    "Rosen Partners", "National Association of Broadcasters", "American Airlines", "General Atomics", "Democracy Engine", "West New York Board Of Education",
                    "Harris Corporation", "Lucas Oil Products", "International Union of Operating Engineers", "Deloitte", "Northrup Grumman", "National Rural Electric Cooperative Association",
                    "Cotchett, Pitre & McCarthy", "Emily's List", "Elliott Management", "Marathon Petroleum", "American Electric Power", "Kock Industries", 
                    "Club for Growth", "Bryan Cave", "United Brotherhood of Carpenters and Joiners of America", 
                // T
                "Matson Incorporated", "J Street", "League of Conservation Voters", "E&J Gallo Winery", "McDonalds Corporation", "Ellwood Group", "Lockheed Martin",
                    "Sanford Health", "Nationwide", "Elliott Management", "SG Interests", "MGM Resorts International", "General Electric", "Club for Growth", 
                    "American Federation of State, County and Municipal Employees", "Trott And Trott", "Foley Hoag Llp", "Sugar Creek Packing",
                // U
                "League of Conservation Voters", "Comcast",
                // V
                "Chevron", "Deloitte", "Duty Free Americas", "Nix Patterson And Roach", "Border Health", "Adams European Contracting", "Lockheed Martin",
                    "Jones Walker",
                // W    
                "Northwestern Mutual", "Health Plan Of Michigan", "National Association of Broadcasters", "Lorillard Tobacco Company", "Health Quest Corporation",
                    "Western National Group", "Robins Kaplan Et Al", "J.P. Morgan Chase", "Emily's List", "NORPAC", "National Multi Housing Council",
                    "Ross Feller And Casey", "Texas Memory Systems", "CNL Financial", "Home Depot", "American Financial Group", "Stephens Incorporated",
                    "Aflac", "Thornton and Naumes", "Firstenergy Corporation", "Telapex Incorporated", "Energy Future Holdings", "American Federation of State, County and Municipal Employees", 
                    "Southeastern Freight Lines", "Huntington Ingalls Industries", "Walmart", "American Dental Association", "Akin Gump",
                // Y
                "Brown Forman Corporation", "Burns and Mcdonnell", "Tatum Brothers Lumber Company", "Eli Lilly and Company", "Wells Fargo", "Edison Chouest Offshore",
                // Z
                "HJ Kalikow And Company", "Fidelity National Financial"
                ];
            
            
            for ( var k = 0; k < senatorName.length; k++) {
                var replacedText = text.replace(senatorName[k], senatorName[k] + " " + "{" + senatorOrg[k] + "}");
                if (replacedText !== text) {element.replaceChild(document.createTextNode(replacedText), node);}
            }
        }
    }
}
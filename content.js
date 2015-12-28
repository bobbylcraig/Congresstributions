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
                "Ken Calvert", "Maria Cantwell", "Shelley Capito", "Lois Capps"
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
                "General Atomics", "Microsoft", "Sullivan and Cromwell", "J Street"
                ];
            
            
            for ( var k = 0; k < senatorName.length; k++) {
                var replacedText = text.replace(senatorName[k], senatorName[k] + " " + "{" + senatorOrg[k] + "}");
                if (replacedText !== text) {element.replaceChild(document.createTextNode(replacedText), node);}
            }
        }
    }
}
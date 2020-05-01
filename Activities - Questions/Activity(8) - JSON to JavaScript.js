//Consider the following JavaScript object literal
let javaScriptObject = {
    team: "Avengers",
    setting: "Marvel Cinematic Universe",
    members: [
        {
            name: "Captain America",
            alive: true,
            yearOfBirth: 1918,
            secretIdentity: 'Steven Grant "Steve" Rogers',
            affiliations: [
                'United States Army',
                'S.H.I.E.L.D.'
            ]
        },
        {
            name: "Iron Man",
            alive: false,
            yearOfBirth: 1970,
            secretIdentity: 'Anthony Edward "Tony" Stark',
            affiliations: [
                "MIT",
                "Stark Industries"
            ]
        },
        {
            name: "Thor Odinson",
            alive: true,
            yearOfBirth: 964,
            secretIdentity: null,
            affiliations: [
                'Asgardian Royal Family',
                'Revengers'
            ]
        }
    ]
};

//PART 1
//Convert the above Javascript object literal into JSON manually. Then paste it inside a new .json file

//PART 2
//Convert the above Javascript object literal into JSON manually. Then assign it into the variable "jsonStringManual" and print "jsonStringManual"

//PART 3
//Convert the above Javascript object literal into JSON using core API and assign it into the variable "jsonStringAPI" and print "jsonStringAPI"

//PART 4
//Convert the above "jsonStringAPI" string back into a JavaScript object literal using core API. Then assign it into the variable "parsedJsonStringAPI" and print "parsedJsonStringAPI"
function Biodata(biodata)
{
    let biodataAldo =
    {
        "name": biodata,
        "age":22,
        "address": "Jalan Hayam Wuruk Baru 1 No 13 - Surabaya",
        "hobbies": 
        [
            "Game",
            "Travelling",
            "Programming",
            "Sport"
        ],
        "is_married":false,
        "list_school":
        [
            {
                "name"      :"SD Hang Tuah 1 Surabaya",
                "year_in"   :2003,
                "year_out"  :2009,
                "major"     :null
            },
            {
                "name"      :"SMPN 21 Surabaya",
                "year_in"   :2009,
                "year_out"  :2012,
                "major"     :null
            },
            {
                "name"      :"SMAN 21 Surabaya",
                "year_in"   :2012,
                "year_out"  :2015,
                "major"     :"IPA"
            },
            {
                "name"      :"Politeknik Elektronika Negeri Surabaya",
                "year_in"   :2015,
                "year_out"  :2019,
                "major"     :"D4 - Teknologi Game"
            }
        ],
        "skills":
        [
            {
                "skill_name"    :"c",
                "level"         :"advanced"
            },
            {
                "skill_name"    :"c#",
                "level"         :"advanced"
            },
            {
                "skill_name"    :"c++",
                "level"         :"advanced"
            },
            {
                "skill_name"    :"PHP",
                "level"         :"beginner"
            },
            {
                "skill_name"    :"HTML",
                "level"         :"beginner"
            },
            {
                "skill_name"    :"javascript",
                "level"         :"beginner"
            },
        ],
        "interest_in_coding": true
    }

    return biodataAldo;
}

console.log(Biodata("Aldo Ignata Chandra"));
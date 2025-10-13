import { programmingLanguages } from "../Data/LanguageDataSet.js"

const IntroApi = async (req, res) => {
    res.status(200).json({
        message: "Welcome to our Language API",
        To_Do: [
            {
                title: "Get all the languages present within the server",
                method: "GET",
                url: "http://localhost:5021/api/techs/allLanguages",
                ExpectedResult: "[object]/Null"
            },
            {
                title: "Get any random language present within the server",
                method: "GET",
                url: "http://localhost:5021/api/techs/RandomLanguages",
                ExpectedResult: "object/Null"
            },
            {
                title: "Get filter languages based on Scope, Difficulties, Duration",
                method: "GET",
                url: "http://localhost:5021/api/techs/Filters?scope=***&difficulty=***&duration=***",
                ExpectedResult: "object/[object]/Null",
                ExpectedFilters: [
                    {
                        scope: [
                            "AI", "Web Development", "Data Science", "Frontend", "Backend", "Enterprise Apps", "Android Development", "System Programming", "Embedded Systems", "Game Development", "System Software", "Desktop Apps", "Game Dev with Unity", "Scripting", "iOS App Development", "Backend Systems", "Cloud Services", "Performance Apps", "Data Analysis", "Machine Learning", "Database Management", "Automation", "Big Data", "Functional Programming", "Research", "Scientific Computing", "Simulation", "System Admin", "Mobile & Web Apps (Flutter)", "iOS/macOS Development", "Desktop Applications", "Low-Level Programming", "Legacy Systems", "Finance", "Web Applications", "Distributed Systems", "JVM Apps", ".NET", "Desktop Development", "Hardware Design", "FPGA", "SAP Systems", "Blockchain", "Smart Contracts", "Safety-Critical Systems", "Education", "Windows Admin", "Learning Programming", "GUI Apps", "Data Analytics", "Object-Oriented Programming", "Graphics", "Printing", "Linux Admin", "Web Development (Meta)", "Database Programming", "Quantum Computing", "Database Apps", "Text Processing", "Business Applications", "Web Animations", "Frontend Web Development", "Music", "Audio Programming", "GPU Programming", "Web Scripting", "Game Scripting", "Functional Web Apps", "Logic Programming", "Cross-Platform Apps", "Concurrent Programming", "UI Development (Qt)", "XML Transformations", "Networking", "Software Engineering", "Simulation", "OOP Concepts", "Parallel Programming", "Robotics (LEGO)", "High-Integrity Systems", "Interactive Fiction", "Data Visualization", "Engineering & Automation", "Cloud-Native Apps", "Network Programming", "Mathematical Programming", "String Processing", "GNOME Development", "Frontend Development"
                        ],
                        duration: [1, 2, 3, 4, 5, 6], Isin: 'months'
                    },
                    {
                        difficulty: ["Beginner", "Intermediate", "Advance"]

                    }
                ]
            },
            {
                title: "Get filter languages based on their ID(id)",
                method: "GET",
                url: "http://localhost:5021/api/techs/:id/details",
                ExpectedResult: "object/Null"
            }
        ]

    })
}

const allLanguages = (request, response) => {
    response.status(200).json({
        message: `Got all the ${programmingLanguages.length} languages DataSet successfully !`, programmingLanguages
    })
}
const RandomLanguages = (request, response) => {
    let RandomNo = Math.floor((Math.random() * 98) + 1)
    let GetRandomLanguage = programmingLanguages.filter((programmingLanguages, index) => {
        return index == RandomNo

    })
    let [techs] = GetRandomLanguage
    response.status(200).json({
        message: "Got any random DataSet successfully !", techs
    })
}
const FilteredLanguages = (request, response) => {
    try {
        let { scope, duration, difficulty } = request.query
        let FilteredData = programmingLanguages
        let FiltersUsed = ""


        if (!scope && !duration && !difficulty) {
            throw ("Invalid filters ! Please enter the valid one (scope, duration or difficulty)")
        }

        if (difficulty) {
            FilteredData = FilteredData.filter((items) => {
                return items.difficulty.toLowerCase() === difficulty.toLowerCase().trim()
            })
            FiltersUsed += " difficulty "
        }

        if (duration) {

            FilteredData = FilteredData.filter((item) => {
                let GetDuration = item.duration.split(" ")
                //duration m string store h 2 months iss type se vha se split krke ek array bna rhe h ["2","months"] (dataset ka variable use hua)
                return Number(GetDuration[0]) <= Number((duration).toLowerCase().trim())
            })

            FiltersUsed += " duration "
        }

        if (scope) {
            let Filterscope = scope.split(",").map((item) => {
                return item.toLowerCase().trim()
            })
            //user k query kiye gye scopes to split kiya into array 
            //map se ensure kiya ki values lowercase m h and trim se ensure kiya ki extra spaces remove kri h
            FilteredData = FilteredData.filter((items) => {
                const DataSetScope = items.scope.map((Data) => {
                    return Data.toLowerCase()
                })

                return Filterscope.every((item) => {
                    return DataSetScope.includes(item)
                    //.includes() method checks if a specific value exists in an array (or in a string).
                })

            })
            FiltersUsed += " scope "

        }

        if (FilteredData.length == 0) throw ("Unable to filter your data based on", FiltersUsed)


        response.status(200).json({
            message: `We have got your filtered data successfully using filters ${FiltersUsed}`,
            TotalResults: FilteredData.length,
            Result: FilteredData
        })
    } catch (error) {
        console.log("Got errors while filtering :-", error)
        response.status(500).json({ message: "Unable to filter your result", result: null })
    }

}
const IdBasedLanguage = (req, res) => {
    try {
        let { id } = req.params
        if (!id) throw ("Invalid ID !")
        let Result = programmingLanguages.filter((language) => {
            return language.id == id
        })

        if (Result.length == 0) {
              res.status(200).json({ message: `Unable get your language based on ${id} id!` }, Result)
        }

        res.status(200).json({ message: `Got your language based on ${id} id!`, Result })
    }
    catch(error){
         res.status(400).json({ message: "Unable to get language dataset!", error })
    }

}
export { IntroApi, allLanguages, RandomLanguages, FilteredLanguages, IdBasedLanguage }
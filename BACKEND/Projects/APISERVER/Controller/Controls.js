// import { programmingLanguages } from "../Data/LanguageDataSet.js"
import { LanguageModel } from "../Models/languageSchema.js";
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

const allLanguages = async (request, response) => {
    // response.status(200).json({
    //     message: `Got all the ${programmingLanguages.length} languages DataSet successfully !`, programmingLanguages
    // })
    try {
        let result = await LanguageModel.find({})
        response.status(200).json({
            message: `Got all the ${result.length} languages DataSet successfully !`, result
        })
    } catch (error) {
        response.status(400).json({
            message: "Unable to fetch languages please try again", error
        })
    }
}
const RandomLanguages = async (request, response) => {
    // let RandomNo = Math.floor((Math.random() * 98) + 1)
    // let GetRandomLanguage = Language.filter((Language, index) => {
    //     return index == RandomNo

    // })
    // let [techs] = GetRandomLanguage
    // response.status(200).json({
    //     message: "Got any random DataSet successfully !", techs
    // })
    try {
        let alldocument = await LanguageModel.find({})
        let RandomNo = Math.floor((Math.random() * 98 + 1))

        let tech = alldocument[RandomNo]
        response.status(200).json({
            message: "Got any random DataSet successfully !", tech
        })
    } catch {
        response.status(400).json({
            message: "Unable to fetch random language from database"
        })
    }
}
const FilteredLanguages = async (request, response) => {

    try {
        let { scope, duration, difficulty } = request.query
        let FiltersUsed = ""

        if (!scope && !duration && !difficulty) {
            throw ("Invalid filters ! Please enter the valid one (scope, duration or difficulty)")
        }

        //filtering by scope
        if (scope) {
            let ScopeBasedData = await LanguageModel.find({ scope: { $elemMatch: { $eq: scope } }})//elem match 
            FiltersUsed += " scope "
            response.status(200).json({
                message: `Successfully fetched the data based on the ${scope}`, ScopeBasedData
            })
        }
        if (duration) {
            let DurationBasedData = await LanguageModel.find({ duration: duration })
            FiltersUsed += " duration "
            response.status(200).json({
                message: `Successfully fetched the data based on the ${duration}`, DurationBasedData
            })
        }
        if (difficulty) {
           
            FiltersUsed = " difficulty"
            // Allowed enum values list
            const allowedDifficulties = ["Beginner", "Intermediate", "Advanced"];

            // Check if difficulty is valid
            if (!allowedDifficulties.includes(difficulty)) {
                response.status(400).json({
                    message: `Invalid difficulty value: ${difficulty}. Allowed values are ${allowedDifficulties}.`, FiltersUsed
                });
            }
            let DifficultyBasedData = await LanguageModel.find({ difficulty: difficulty })
            response.status(200).json({
                message: `Successfully fetched the data based on the ${difficulty}`, DifficultyBasedData
            })
        }


    } catch (error) {
        response.status(400).json({
            message: "Please provide at least one valid filter (scope, duration, or difficulty).",
        });
    }

}
const IdBasedLanguage = async (req, res) => {

    try {
        let { id } = req.params
        if (!id) throw ("Invalid ID!")
        let IdBasedResult = await LanguageModel.findOne({
            id: id
        })

        if (!IdBasedResult) {
            res.status(200).json({ message: "Couldn't find the language based on the given id! Please provide valid id!" })
        }

        res.status(200).json({
            message: `Got your language of ${id} id`, IdBasedResult
        })
    } catch (error) {
        res.status(400).json({
            message: "Unable to get your language", error
        })
        console.log(error)
    }
}

const PostNewDoc = async (req, res) => {
    try {
        const { id, name, duration, difficulty, scope } = req.body
        const NewDoc = new LanguageModel({ id, name, duration, difficulty, scope })
        await NewDoc.save();
        res.status(201).json({ message: "Successfully added the new document ", NewDoc })
    } catch (err) {
        res.status(400).json({ message: "Unable to add the language", err })
    }
}
export { IntroApi, allLanguages, RandomLanguages, FilteredLanguages, IdBasedLanguage, PostNewDoc }
























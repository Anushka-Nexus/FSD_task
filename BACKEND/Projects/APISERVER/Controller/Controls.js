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
                url: "http://localhost:5021/api/techs?scope=***&difficulty=***&duration=***",
                ExpectedResult: "object/[object]/Null",
                ExpectedFilters: [
                    {
                        scope: [
                            "AI",
                            "Web Development",
                            "Data Science",
                            "Frontend",
                            "Backend",
                            "Enterprise Apps",
                            "Android Development",
                            "System Programming",
                            "Embedded Systems",
                            "Game Development",
                            "System Software",
                            "Desktop Apps",
                            "Game Dev with Unity",
                            "Scripting",
                            "iOS App Development",
                            "Backend Systems",
                            "Cloud Services",
                            "Performance Apps",
                            "Data Analysis",
                            "Machine Learning",
                            "Database Management",
                            "Automation",
                            "Big Data",
                            "Functional Programming",
                            "Research",
                            "Scientific Computing",
                            "Simulation",
                            "System Admin",
                            "Mobile & Web Apps (Flutter)",
                            "iOS/macOS Development",
                            "Desktop Applications",
                            "Low-Level Programming",
                            "Legacy Systems",
                            "Finance",
                            "Web Applications",
                            "Distributed Systems",
                            "JVM Apps",
                            ".NET",
                            "Desktop Development",
                            "Hardware Design",
                            "FPGA",
                            "SAP Systems",
                            "Blockchain",
                            "Smart Contracts",
                            "Safety-Critical Systems",
                            "Education",
                            "Windows Admin",
                            "Learning Programming",
                            "GUI Apps",
                            "Data Analytics",
                            "Object-Oriented Programming",
                            "Graphics",
                            "Printing",
                            "Linux Admin",
                            "Web Development (Meta)",
                            "Database Programming",
                            "Quantum Computing",
                            "Database Apps",
                            "Text Processing",
                            "Business Applications",
                            "Web Animations",
                            "Frontend Web Development",
                            "Music",
                            "Audio Programming",
                            "GPU Programming",
                            "Web Scripting",
                            "Game Scripting",
                            "Functional Web Apps",
                            "Logic Programming",
                            "Cross-Platform Apps",
                            "Concurrent Programming",
                            "UI Development (Qt)",
                            "XML Transformations",
                            "Networking",
                            "Software Engineering",
                            "Simulation",
                            "OOP Concepts",
                            "Parallel Programming",
                            "Robotics (LEGO)",
                            "High-Integrity Systems",
                            "Interactive Fiction",
                            "Data Visualization",
                            "Engineering & Automation",
                            "Cloud-Native Apps",
                            "Network Programming",
                            "Mathematical Programming",
                            "String Processing",
                            "GNOME Development",
                            "Frontend Development"
                        ]
                    },
                    {
                        duration :[1,2,3,4,5,6],Isin : 'months'
                    },
                    {
                       difficulty :["Easy","Medium","Hard"]
                      
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

export { IntroApi, allLanguages, RandomLanguages }
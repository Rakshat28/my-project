const HospitalRecords = () => {

    const team = [
        {
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/World_Trade_Center%2C_Orion_Mall%2C_Bangalore..jpg/800px-World_Trade_Center%2C_Orion_Mall%2C_Bangalore..jpg",
            name: "Had a Migraine Attack / 28/06/2024",
            title: "Manipal Hospital",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://www.apollohospitals.com/ahmedabad/cancer-center/wp-content/uploads/2015/04/apollo-ahmedabad.jpg",
            name: "Road Accident (extreme blood loss & heavy concussions) / 21/01/2024",
            title: "Apollo Hospital",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://imgs.search.brave.com/qkOK21fj7KtB7uPKnqxrHavkVlHNWLoSGXj8mYKQjMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRz/dXJnZWluZGlhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMi9Gb3J0aXMt/SG9zcGl0YWwtR3Vy/Z2Fvbi0xLmpwZw",
            name: "High Blood Pressure reported / 12/10/2023",
            title: "Fortis",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://imgs.search.brave.com/hb3lu5hAgudn7xpIlGLvSHDg0FLQu71ZFIMo4gigS7M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkzL1lhc2hvZGFf/SG9zcGl0YWxzX1Nv/bWFqaWd1ZGEuanBn",
            name: "Allergic Reaction caused by mousqito repellant / 30/08/2023",
            title: "Yashoda Hospitals",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
    ]

    return (
        <section className="py-10">
            <div className="max-w-screen-xl mx-auto px-4 bg-white">
                <div className="max-w-xl ">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Past Medical Records
                    </h3>
                    
                </div>
                <div className="mt-12">
                    <a href="https://imgs.search.brave.com/aCus_VStisy8L8wDsuMKGuhFgj5ieSaP7Nh2qcJhSOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGRmZmlsbGVyLmNv/bS9wcmV2aWV3LzMx/NS8yNTYvMzE1MjU2/NTc0LnBuZw">
                    <ul className="grid gap-8 lg:grid-cols-1 p-2 ">
                        {
                            team.map((item, idx) => (
                                <li key={idx} className="gap-8 sm:flex shadow-md rounded-xl p-4">
                                    <div className="w-full h-60">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl shadow-xl "
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                        
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HospitalRecords;
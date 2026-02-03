import JsonReport from "./components/JsonReport/JsonReport";

function App() {
  return (
    <div className="App">
      Added Comment
      <JsonReport
        data={{
          company: "TechCorp",
          departments: [
            {
              name: "Engineering",
              manager: {
                name: "Alice Smith",
                age: 40,
                contact: {
                  email: "alice.smith@techcorp.com",
                  phone: "555-1234",
                },
              },
              teams: [
                {
                  name: "Frontend",
                  members: [
                    {
                      name: "Bob",
                      role: "Senior Developer",
                      skills: ["React", "TypeScript", "CSS"],
                      projects: [
                        {
                          name: "Project A",
                          status: "Completed",
                          timeline: {
                            start: "2023-01-10",
                            end: "2023-06-15",
                          },
                        },
                        {
                          name: "Project B",
                          status: "Ongoing",
                          timeline: {
                            start: "2023-07-01",
                            end: null,
                          },
                        },
                      ],
                    },
                    {
                      name: "Cindy",
                      role: "Developer",
                      skills: ["JavaScript", "HTML", "CSS"],
                      projects: [],
                    },
                  ],
                },
                {
                  name: "Backend",
                  members: [
                    {
                      name: "David",
                      role: "Lead Developer",
                      skills: ["Node.js", "Express", "MongoDB"],
                      projects: [
                        {
                          name: "Project C",
                          status: "Delayed",
                          issues: [
                            {
                              id: "ISS-234",
                              description: "Database performance",
                              priority: "High",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "Marketing",
              manager: {
                name: "Eva Green",
                age: 38,
                contact: {
                  email: "eva.green@techcorp.com",
                  phone: "555-5678",
                },
              },
              campaigns: [
                {
                  title: "Launch Campaign",
                  budget: 50000,
                  channels: ["Email", "Social Media", "SEO"],
                  metrics: {
                    reach: 1000000,
                    engagement: 250000,
                    conversions: 15000,
                  },
                },
              ],
            },
          ],
          financials: {
            "2023": {
              Q1: {
                revenue: 1000000,
                expenses: 750000,
                profit: 250000,
              },
              Q2: {
                revenue: 1100000,
                expenses: 800000,
                profit: 300000,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default App;

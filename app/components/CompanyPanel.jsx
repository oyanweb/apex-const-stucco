import Image from "next/image";

const CompanyPanel = () => {
    
const companies = [
    {
      id: 1,
      image: "/images/company1.png",
      label: "Company One",
    },
    {
      id: 2,
      image: "/images/company2.png",
      label: "Company Two",
    },
    {
      id: 3,
      image: "/images/company3.png",
      label: "Company Three",
    },
    {
      id: 4,
      image: "/images/company4.png",
      label: "Company Four",
    },
    {
      id: 5,
      image: "/images/company5.png",
      label: "Company Five",
    },
  ];
  

  return (
    <section className="bg-gray-200 py-10 border-b border-t border-gray-300 mb-10">
      <div className="container mx-auto flex justify-center gap-10 flex-wrap">
        {companies.map((company) => (
          <div key={company.id} className="flex flex-col items-center">
            <div className="bg-white shadow-md p-4 rounded">
              <Image
                src={company.image}
                alt={company.label}
                width={80}
                height={80}
              />
            </div>
            <p className="mt-2 font-semibold">{company.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyPanel;

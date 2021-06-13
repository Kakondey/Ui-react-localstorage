import "./styles/company.css";

const Company = ({ user }) => {
  return (
    <div className="company-data">
      <h1>Company</h1>
      <div>
        Name : <span>{user.company.name}</span>
      </div>
      <div>
        catchphrase : <span>{user.company.catchPhrase}</span>
      </div>
      <div>
        bs : <span>{user.company.bs}</span>
      </div>
    </div>
  );
};

export default Company;

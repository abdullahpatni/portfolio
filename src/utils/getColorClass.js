const getColorClass = (tech) => {
  switch (tech) {
    case "AdobeXD":
      return "adobe-xd";
    case "Angular":
      return "angular";
    case "Antlr":
      return "antlr";
    case "CI/CD":
      return "cicd";
    case "Docker":
      return "docker";
    case "JavaScript":
      return "javascript";
    case "TypeScript":
      return "typescript";
    case "HTML":
      return "html";
    case "CSS":
      return "css";
    case "Git":
      return "git";
    case "GCP":
      return "gcp";
    case "Golang":
      return "golang";
    case "Node.js":
      return "nodejs";
    case "Express.js":
      return "expressjs";
    case "MongoDB":
      return "mongodb";
    case "MySQL":
      return "mysql";
    case "Next.js":
      return "nextjs";
    case "PostgreSQL":
      return "postgresql";
    case "PrimeNg":
      return "primeng";
    case "OAuth 2.0":
      return "oauth2";
    case "OIDC":
      return "oidc";
    case "Firebase":
      return "firebase";
    case "Jest":
      return "jest";
    case "Kubernetes":
      return "kubernetes";
    case "React.js":
      return "reactjs";
    case "Redux":
      return "redux";
    case "JWT":
      return "jwt";
    case "Strapi":
      return "strapi";
    case "MUI":
      return "mui";
    case "Vue.js":
      return "vuejs";
    default:
      return "";
  }
};

export default getColorClass;

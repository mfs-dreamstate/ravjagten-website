# CLAUDE.md

## 🚨 CRITICAL: CUSTOMER SPECIFICATIONS ARE THE ABSOLUTE TRUTH 🚨

This is a website project for Ravjagten.

### PRIORITY ORDER:
1. **MVP.md** - This is the TRUTH for features and content
2. **THEME.md** - This is the TRUTH for design and styling  
3. **Customer data below** - This is the TRUTH for all details
4. **Template files** - These are ONLY a starting point

### Customer Data (THIS OVERRIDES EVERYTHING):
```json
{
  "companyInfo": {
    "email": "pdm@dreamstate.dk",
    "name": "Ravjagten",
    "industry": "Technology",
    "phone": "61750924"
  },
  "brandDesign": {
    "fontPreference": "modern",
    "designStyle": "minimal",
    "primaryColor": "#95E1D3"
  },
  "content": {
    "home": {
      "bulletPoints": [],
      "headline": "Ravjagten",
      "description": "Welcome to our website"
    },
    "about": {
      "bulletPoints": [],
      "headline": "About Us",
      "description": "Learn more about us Vi vil bringe familier tættere sammen ved at tilbydde pakkeløsninger der gør at man kan komme nemt i gang med en familie hobby. Det kunne f.eks. være guides og produkter til at starte med at gå på rav jagt."
    },
    "services": {
      "servicesList": [
        {
          "name": "Our Services",
          "description": "We provide quality services",
          "features": []
        }
      ]
    },
    "contact": {
      "showContactForm": true,
      "showMap": false
    }
  },
  "targetAudience": {
    "painPoints": [],
    "goals": [],
    "description": "Min ideelle kunde er 30-40 år og har en eller flere børn og vil gerne i gang med en hobby for hele familien."
  },
  "features": {
    "seo": true,
    "analytics": true,
    "contactForm": true,
    "newsletter": false,
    "socialMedia": false,
    "blog": false,
    "testimonials": false,
    "gallery": false,
    "ecommerce": false
  }
}
```

### Your Task:
1. **READ MVP.md FIRST** - This contains what the customer ACTUALLY wants
2. **READ THEME.md SECOND** - This contains how it should ACTUALLY look
3. **IGNORE template defaults if they conflict with customer specs**
4. If template says "blue" but customer wants "orange" - USE ORANGE
5. If template has a header but customer doesn't want one - REMOVE IT
6. Customer specifications are SACRED - template is just scaffolding

### Examples of Customer Priority:
- Template has glassmorphism CSS but customer wants minimal? DELETE the glassmorphism
- Template uses Inter font but customer wants Roboto? CHANGE to Roboto
- Template has 3 sections but customer wants 5? CREATE 5 sections
- Template has English but customer provided Danish? USE DANISH

The template saves time on boilerplate. Your job is to TRANSFORM it based on customer needs.
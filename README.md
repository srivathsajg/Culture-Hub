# 🇮🇳 India – Land of Tourism

<p align="center">
  <b>Explore the Beauty, Culture, Heritage & Diversity of India</b>
</p>

<p align="center">
  Discover India's famous destinations, explore different states, and learn about the history and beauty of incredible places.
</p>

---

## 📌 About the Project

**India – Land of Tourism** is a web-based tourism exploration platform designed to showcase the beauty and cultural diversity of India.

The website allows users to register, log in, explore Indian states, and discover popular tourist destinations. It integrates the Wikipedia API to retrieve information, descriptions, and images about tourist attractions, making it easier for users to learn about places before visiting them.

The project aims to promote Indian tourism and make destination information accessible through a simple and interactive web experience.

## ✨ Features

- 🔐 **User Authentication:** User registration and login integrated with Supabase.
- 🗺️ **Explore Indian States:** Select and explore states using an interactive state selection interface.
- 🏛️ **Tourist Destinations:** Discover popular tourist attractions across supported states.
- 🌐 **Wikipedia Integration:** Retrieve destination information dynamically using the Wikipedia API.
- 🖼️ **Dynamic Images:** Display relevant images of tourist attractions.
- 📖 **Detailed Information:** Read summaries and access additional information through Wikipedia.
- 🎨 **Interactive UI:** Animated elements and responsive layouts for an engaging browsing experience.
- 📂 **Structured Tourism Data:** JSON-based data containing destination details, food, festivals, and cultural information.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Dynamic functionality |
| JSON | Tourism data management |
| Supabase | User authentication |
| Wikipedia API | Tourism information and images |
| Animate.css | Animations |
| AOS | Scroll animations |

## 📂 Project Structure

```text
TOURIST/
│
├── index.html             # Main landing page
├── home.html              # Tourism state selection
├── states.html            # Explore Indian states
├── state-tourism.html     # State tourism information
│
├── login.html             # User login
├── register.html          # User registration
│
├── auth.js                # Authentication functionality
├── auth-check.js          # Authentication checks
├── supabaseClient.js      # Supabase configuration
│
├── states.js              # State selection functionality
├── state-places.js        # Tourism data and Wikipedia API
├── script.js              # Frontend interactions
│
├── places.json            # Tourism dataset
├── styles.css             # Main stylesheet
├── auth.css               # Authentication styling
│
└── settings.json          # Development settings
```

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/India-Land-of-Tourism.git
```

### 2. Navigate to the Project

```bash
cd India-Land-of-Tourism
```

### 3. Configure Supabase

1. Create a project on [Supabase](https://supabase.com/).
2. Get your project URL and anon/public key.
3. Configure the credentials in the Supabase client files.
4. Enable the required email authentication settings.

Never expose your Supabase service-role key in frontend code.

### 4. Run the Project

Open the project folder in Visual Studio Code.

Install the **Live Server** extension and launch `index.html` using Live Server.

Example:

```text
http://127.0.0.1:5500/index.html
```

## 🌍 Tourism Data

The project currently contains curated tourism information for 15 Indian states.

The JSON dataset includes:

- State descriptions
- Popular tourist destinations
- Regional food
- Festivals
- Cultural information
- Video references

Tourist destination summaries and images are retrieved dynamically through the Wikipedia API.

## 🎯 Project Objective

To promote Indian tourism by developing an interactive digital platform that connects people with India's diverse destinations, cultural heritage, traditions, and attractions.

## 🚀 Future Enhancements

- Add tourism information for all Indian states and union territories.
- Implement search and filtering for destinations.
- Add interactive maps and location-based navigation.
- Include travel itineraries and destination recommendations.
- Add hotel and transportation information.
- Develop a dedicated travel guide for each destination.

## 👨‍💻 Developed By

**Srivathsa**

Computer Science Engineering Student | Aspiring Software Engineer

🌐 [GitHub](https://github.com/srivathsajg)

---

<p align="center">
  <b>🇮🇳 Discover India. Explore Its Beauty. Experience Its Culture.</b>
</p>

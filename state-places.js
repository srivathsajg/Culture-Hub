// state-places.js - Handles state selection and displays tourism places with Wikipedia info

document.addEventListener("DOMContentLoaded", () => {
    const stateSelect = document.getElementById("stateSelect");
    
    if (stateSelect) {
      stateSelect.addEventListener("change", async (e) => {
       const selectedState = e.target.value;
        if (selectedState) {
          // Redirect to the state tourism page with the selected state as a parameter
          window.location.href = `state-tourism.html?state=${encodeURIComponent(selectedState)}`;
        }
      });
    }
  });
  
  // Function to get places data from places.json
  async function getPlacesData() {
    try {
      const response = await fetch('places.json');
      if (!response.ok) {
        throw new Error('Failed to fetch places data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error loading places data:', error);
      return {};
    }
  }
  
  // Function to fetch Wikipedia information for a place
  async function fetchWikipediaInfo(placeName, stateName) {
    try {
      // Construct a more specific search term by combining place and state
      const searchTerm = `${placeName} ${stateName} tourism India`;
      
      // First API call: Search for relevant Wikipedia pages
      const searchUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json`;
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();
      
      if (searchData.query.search.length === 0) {
        return { error: "No Wikipedia information found" };
      }
      
      // Get the page ID of the first search result
      const pageId = searchData.query.search[0].pageid;
      
      // Second API call: Get the extract and image for the page
      const extractUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts|pageimages&exintro=true&explaintext=true&piprop=original&pageids=${pageId}&format=json`;
      const extractResponse = await fetch(extractUrl);
      const extractData = await extractResponse.json();
      
      const page = extractData.query.pages[pageId];
      
      // Return the formatted Wikipedia information
      return {
        title: page.title,
        extract: page.extract || `Information about ${placeName} in ${stateName}.`,
        image: page.original ? page.original.source : null,
        url: `https://en.wikipedia.org/?curid=${pageId}`
      };
    } catch (error) {
      console.error('Error fetching Wikipedia data:', error);
      return { error: "Failed to fetch Wikipedia information", message: error.message };
    }
  }
  
  // Export the functions for use in other files
  window.tourismUtils = {
    getPlacesData,
    fetchWikipediaInfo
  };
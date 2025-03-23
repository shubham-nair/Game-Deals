document.getElementById("dealForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${encodeURIComponent(title)}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch deals");
  
      const deals = await response.json();
      const resultsList = document.getElementById("resultsList");
      resultsList.innerHTML = "";
  
      if (deals.length === 0) {
        resultsList.innerHTML = "<li>No deals found.</li>";
      } else {
        for (const deal of deals) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <figure>
                <img src="${deal.thumb}" alt="${deal.title} Thumbnail" />
                <figcaption><h3>${deal.title}</h3></figcaption>
                </figure>
                <p><strong>Sale Price:</strong> $${deal.salePrice}</p>
                <p><strong>Normal Price:</strong> $${deal.normalPrice}</p>
                <p><strong>Savings:</strong> ${parseFloat(deal.savings).toFixed(0)}%</p>
                <p>
                <a href="https://www.cheapshark.com/redirect?dealID=${deal.dealID}" target="_blank" rel="noopener noreferrer">
                    View Deal on Steam
                </a>
                </p>
            `;
            resultsList.appendChild(listItem);
            }
      }
  
      document.getElementById("resultsSection").hidden = false;
  
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while fetching the deals.");
    }
  });
  
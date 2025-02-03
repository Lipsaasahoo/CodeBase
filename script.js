document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.querySelector("header").appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    // Mock Search Function
    document.getElementById("searchButton").addEventListener("click", function () {
        const query = document.getElementById("searchQuery").value;
        const resultsContainer = document.getElementById("resultsContainer");

        if (!query.trim()) return;

        // Mock results
        const mockResult = `
            <div class="accordion-item">
                <h3>NFPA 101: Life Safety Code</h3>
                <p class="text-gray-600">Short summary of the section.</p>
                <div class="flex justify-between items-center">
                    <span class="text-gray-500">Code Reference: NFPA 101, Page 12</span>
                    <span class="risk-tag high-risk">🔴 High Risk</span>
                </div>
                <a href="#" class="text-blue-600 hover:underline">View Document</a>
                <p class="mt-2">✅ Recommended Actions: Steps to mitigate risk.</p>
            </div>
        `;

        resultsContainer.innerHTML = mockResult;
    });
});

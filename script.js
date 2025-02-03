document.addEventListener("DOMContentLoaded", function () {
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

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

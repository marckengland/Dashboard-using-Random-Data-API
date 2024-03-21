// Load the data when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', fetchData);
  });

// Fetch data from the API
  function fetchData(load) {
  const type = 'users';
  const url = new URL(`https://random-data-api.com/api/v2/${type}`);
  let params = new URLSearchParams();
  params.set('size', 15); // Set the number of users to display
  params.set('response_type', 'json'); // Set the response type to JSON
  url.search = params;

  fetch(url)
  // Check if the response is ok
    .then((response) => {
      if (!response.ok) throw new Error('404 Error: Not Found');
      return response.json();
    })
    // Display the data
    .then(showUsers)
    // Catch any errors and log them to the console
    .catch(console.warn);
}

// Display the data in a table
function showUsers(data) {
    // Log the data to the console
    console.log(data);
    // Select the main element
    let main = document.querySelector('main');
    // Set the innerHTML of the main element to the table
    main.innerHTML = `
        <table class="min-w-full bg-white shadow-md rounded">
            <thead class="bg-gray-800 text-white">
                <tr>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">First Name</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Last Name</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Subscription Plan</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                ${data.map(({ first_name, last_name, email, subscription}) => {
                    return `
                        <tr>
                            <td class="text-left py-3 px-4">${first_name}</td>
                            <td class="text-left py-3 px-4">${last_name}</td>
                            <td class="text-left py-3 px-4">${email}</td>
                            <td class="text-left py-3 px-4">${subscription.plan}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>`; 
}

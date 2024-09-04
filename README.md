# Webengage Assignment

## Description

The Webengage Assignment is a project that creates an Express.js route to integrate data from three different API endpoints. It extracts specific key values from their responses, writes these values into a CSV file, and returns the path to the generated CSV file.

## Installation

1. Clone the repository from GitHub:

   <pre><code class="!whitespace-pre hljs language-bash">git clone https://github.com/nakul30/webEngage.git>
   </code></div></div></pre>
2. Navigate to the project directory:
   By default you are in the Main i.e in where index.js is located

3. Install the dependencies:

   <pre><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm install
   </code></div></div></pre>
4. Start the development server:

   <pre><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm run dev
   </code></div></div></pre>

## Usage

* The server will be running at `http://localhost:4000` or `http://localhost:PORT`.
* The project has a single route, `/generate-csv`, which can be accessed at `http://localhost:4000/generate-csv`.



## API Endpoint

### Generate CSV

* **URL** : `/generate-csv`
* **Method** : `GET`

This endpoint fetches data from external APIs, processes it, and generates a CSV file. The generated file contains:

* **Name** : The name of the user.
* **Title** : Titles of the posts made by the user, separated by `<---->`.
* **Body** : Bodies of comments related to the user's posts, with newlines replaced by commas and comments separated by `<---->`.

#### Testing the API

To test the API:

1. **Using Postman** :

* Open Postman.
* Create a new GET request.
* Enter the URL: `http://localhost:4000/generate-csv`.
* Click "Send".

1. **Response** :
   On a successful request, the response will contain the message "CSV file generated successfully" along with the path to the generated CSV file:

<pre><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>json</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-json">{
       "message": "CSV file generated successfully",
       "csvFilePath": "/path/to/generated/csv/data_<timestamp>.csv"
   }
   </code></div></div></pre>

1. **Error Handling** :
   If there is an issue with fetching the data or generating the CSV file, you will receive a 500 status code with the following message:

<pre><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>json</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copy code</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-json">{
       "message": "Internal Server Error. Try restarting the server again or uncomment line 10-15 and comment line 34-45 from controller"
   }
   </code></div></div></pre>

## Directory Structure

* **`/csvdata`** : Directory where the JSON files used during development are stored.
* **`/data`** : Directory where the generated CSV files are saved.
* /route: Containing the route for the right controller function

## Notes

* The server fetches data from `https://jsonplaceholder.typicode.com`. Ensure you have an active internet connection.
* During development, you can switch between using local JSON files and fetching data from the API by modifying the relevant lines in the `generateCSV` controller.
* The unique timestamp in the filename ensures no two files will have the same name, even when generated in quick succession.

## Troubleshooting

* Ensure that the dependencies are installed correctly using `npm install`.
* If the server fails to start, check the `.env` file for correct configurations.
* If API requests fail, verify that you can access `https://jsonplaceholder.typicode.com` from your network.

## Configuration

* Changing the port number is optional. You can set the desired port number if needed.

## License

This project is licensed under the MIT License.

## Contact

For support or questions, please contact Nakul at [nakulgarg.003@gmail.com]().

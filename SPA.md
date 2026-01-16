**SPA** stands for **Single Page Application**.

### What a Single Page Application is

A **Single Page Application** is a web application that **loads a single HTML page once** and then **dynamically updates the content** as the user interacts with the app—**without reloading the entire page**.

### How it works

1. The browser loads one main HTML file (usually `index.html`).
    
2. JavaScript takes control of the UI.
    
3. When the user navigates or performs actions:
    
    * The app fetches data from the server using APIs (AJAX / Fetch / Axios).
        
    * Only the required parts of the page are updated (DOM manipulation).
        
4. Navigation is handled on the client side using **client-side routing**.
    

### Key characteristics

* **No full page reloads**
    
* **Client-side rendering**
    
* **Uses APIs (REST/GraphQL)**
    
* **Smooth, app-like user experience**
    

### Technologies commonly used

* **Frameworks/Libraries:** React, Angular, Vue
    
* **Routing:** React Router, Vue Router
    
* **State management:** Redux, Vuex, Zustand
    
* **Backend:** Provides APIs only (JSON)
    

### Example

* Gmail
    
* Google Maps
    
* Twitter (X)  
    These feel like native apps because only parts of the page update.
    

### SPA vs Traditional Multi-Page Application (MPA)

| Feature | SPA | MPA |
| --- | --- | --- |
| Page reload | No | Yes |
| Speed | Faster after initial load | Slower |
| User experience | Smooth | Less fluid |
| SEO | Harder (but solvable) | Easier |
| Backend role | API provider | Page renderer |

### Advantages

* Fast and responsive UI
    
* Better user experience
    
* Less server load after initial request
    

### Disadvantages

* Initial load can be heavy
    
* SEO requires extra setup (SSR, pre-rendering)
    
* More JavaScript complexity
    

### Simple definition (exam-friendly)

> A **Single Page Application (SPA)** is a web application that loads a single HTML page and dynamically updates content without reloading the page, using JavaScript and APIs.

If you want, I can explain **SPA with a diagram**, **real code example**, or **compare it with MPA in more depth**.
# What are cookies

### Cookies in web development are small pieces of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. They are designed to be a reliable mechanism for websites to remember things (very similar to local storage)

## Session Management

## Personalization

## Tracking & Security

# Why not local storage?

### Cookies and LocalStorage both provide ways to store data on the client-side, but they serve different purposes and have different characteristics.

## Cookies are send with every request to the website (by the browser) (you don’t have to explicitly add a header to the fetch call)

## Cookies can have an expiry attached to them

## Cookies can be be restricted to only https and to certain domains

# Properties of cookies

## Types of cookies

### Persistent - Stay even if u close the window

### Session - Go away after the window closes

### Secure - Sent only over secure, encrypted connections (HTTPS).

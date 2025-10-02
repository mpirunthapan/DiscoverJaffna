import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("attractions","routes/attractions.tsx"),
    route("hotels","routes/hotels.tsx"),
    route("restaurants","routes/restaurants.tsx"),
    route("rentals","routes/rentals.tsx"),
    route("events","routes/events.tsx"),
    route("*","routes/pagenotfound.tsx"),
] satisfies RouteConfig;

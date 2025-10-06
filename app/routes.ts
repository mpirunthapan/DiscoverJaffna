import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("attractions","routes/attractions.tsx"),
    route("attraction/:id","routes/attractionDetail.tsx"),
    route("stays","routes/stays.tsx"),
    route("restaurants","routes/restaurants.tsx"),
    route("rentals","routes/rentals.tsx"),
    route("events","routes/events.tsx"),
    route("contact","routes/contact.tsx"),
    route("*","routes/pagenotfound.tsx"),
] satisfies RouteConfig;

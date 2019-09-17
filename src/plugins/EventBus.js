import Vue from "vue";

const EventBus = new Vue();

export default (V) => {
    Object.defineProperties(V.prototype, {
        $events: {
            get: function () {
                return EventBus
            },
        },
    });
};

// isBestFriend

const man1 = { name: "Tom", friend: "Rock" };
const man2 = { name: "Rock", friend: "Tom" };
function isBestFriend(object1, object2) {
    if ((object1.name == object2.friend) && (object1.friend == object2.name)) {
        return true;
    }
    else {
        return false;
    }


}








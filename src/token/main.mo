import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Prelude "mo:base/Prelude";
import Debug "mo:base/Debug";


actor Token {
    var owner: Principal = Principal.fromText("qjpq7-updy4-r5itg-dkcz4-mm7no-vlkax-ih3ss-pdsu7-6hn34-b5jw5-cae");
    var totalSupply: Nat = 1000000000;
    var symbol: Text = "TOK";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal) : async Nat{
        let balance: Nat = switch(balances.get(who)) {
            case(null) { 0 };
            case(?result) { result };
        };
    };

    public query func getSymbol(): async Text{
        return symbol;
    };

}
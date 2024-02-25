/* eslint-disable react/prop-types */
import { helix } from "ldrs";
import { dotSpinner } from "ldrs";
import { bouncy } from "ldrs";
import { lineWobble } from "ldrs";

helix.register();
dotSpinner.register();
bouncy.register();
lineWobble.register();

function MoneyLoader({ isLoading }) {
  return (
    <div className="mt-2" aria-live="polite" aria-busy={isLoading}>
      {isLoading && <l-helix size="45" speed="2.5" color="black"></l-helix>}
    </div>
  );
}
function BufferLoader({ isLoading }) {
  return (
    <div className="mt-2 " aria-live="polite" aria-busy={isLoading}>
      {isLoading && (
        <l-dot-spinner size="40" speed="0.9" color="black"></l-dot-spinner>
      )}
    </div>
  );
}

function BalanceLoader({ isLoading }) {
  return (
    <div className="mt-0 inline ml-4" aria-live="polite" aria-busy={isLoading}>
      {isLoading && <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>}
    </div>
  );
}

function TransferLoader({ isLoading }) {
  return (
    <div className="mt-0 inline ml-4" aria-live="polite" aria-busy={isLoading}>
      {isLoading && (
        <l-line-wobble
          size="80"
          stroke="5"
          bg-opacity="0.1"
          speed="1.75"
          color="black"
        ></l-line-wobble>
      )}
    </div>
  );
}

export default { MoneyLoader, BufferLoader, BalanceLoader, TransferLoader };

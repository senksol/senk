import React, { useState } from 'react';
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function CopyToClipboard() {
  const [textToCopy, setTextToCopy] = useState('FeBg9Utf5wFa2PsT6KnJ6uitvWtfc87R38wmRnxrNMiW');
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        // Reset the copied state after 30 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch(err => {
        console.error('Failed to copy to clipboard: ', err);
      });
  };

  return( 
    <div className="copytoclipboard-inner d-flex flex-wrap align-items-end gap-3 gap-lg-4">
      <div className='me-1 me-lg-2 w-100 w-sm-auto'>
        <div className="copytoclipboard">
          <p className='d-flex'>
           {textToCopy}
          </p>
          <button onClick={handleCopyToClipboard}>
            {!isCopied && (
              <span>
                copy
              </span>
            )}
            {isCopied && (
              <span className='copied'>
                Copied
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
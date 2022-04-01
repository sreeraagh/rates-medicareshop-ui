import React from "react";
import QuoteCard from "../components/quotecard";
import Stack from "@mui/material/Stack";

export default function Quoteslist({ quotes }) {
  return quotes.map((quote, i) => (
    <Stack key={i}>
      <QuoteCard quote={quote} />
    </Stack>
  ));
}

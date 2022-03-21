import * as React from "react";
//import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function QuoteCard({ quote }) {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography color="text.primary" variant="h6" sx={{ mb: 2 }}>
          Provider : {quote.company_base.name}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack>
              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Premium : ${quote.rate.month / 100}/month
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Ambest Rating : {quote.company_base.ambest_rating}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.primary">
                SP Rating : {quote.company_base.sp_rating}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack>
              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Years in the market : {quote.company_base.established_year}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Effective Date : {quote.effective_date}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Rate Type : {quote.rate_type}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button size="small">Checkout</Button>
      </CardActions>
    </Card>
  );
}

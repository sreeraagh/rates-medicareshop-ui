import React, { useState } from "react";
//import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckoutForm from "./checkoutform";

import Dialog from "@mui/material/Dialog";

export default function QuoteCard({ quote }) {
  const rateinc = quote.rate_increases;
  const disc = quote.discounts;

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography color="text.primary" variant="h6" sx={{ mb: 2 }}>
          Provider : {quote.company_base.parent_company_base.name}
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

              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Years in the market :{" "}
                {2022 - quote.company_base.established_year}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Effective Date : {quote.effective_date.substring(0, 10)}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Rate Type : {quote.rate_type}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack sx={{ mb: 1.5 }}>
              <Typography color="text.primary" sx={{ mb: 0.5 }}>
                Rate Increase history :
              </Typography>

              {rateinc.map((data, i) => (
                <Typography sx={{ mb: 0.5 }} key={i}>
                  ${(data.rate_increase * 100).toString().substr(0, 5)}{" "}
                  <small style={{ color: "#888" }}>
                    ({data.date.substring(0, 10)})
                  </small>
                </Typography>
              ))}
            </Stack>

            <Stack direction="row">
              <Typography color="text.primary" sx={{ mb: 1 }}>
                Discounts :{" "}
              </Typography>
              {disc.map((data, i) => (
                <Typography sx={{ mb: 0.5, ml: 0.5 }} key={i}>
                  {" "}
                  {data.name} ({(data.value * 100).toString().substr(0, 4)}%)
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* <Grid container>
          <Grid item xs={6}>
            <Stack>
              <Typography color="text.primary" sx={{ mb: 1 }}>
                Rate Increase history :
              </Typography>
              {rateinc.map((data, i) => (
                <Typography sx={{ mb: 0.5 }} key={i}>
                  ${(data.rate_increase * 100).toString().substr(0, 5)}{" "}
                  <small style={{ color: "#888" }}>
                    ({data.date.substring(0, 10)})
                  </small>
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="row">
              <Typography color="text.primary" sx={{ mb: 1 }}>
                Discounts :{" "}
              </Typography>
              {disc.map((data, i) => (
                <Typography sx={{ mb: 0.5, ml: 0.5 }} key={i}>
                  {" "}
                  {data.name}{" "}
                  <b>({(data.value * 100).toString().substr(0, 4)}%)</b>
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid> */}
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          Checkout
        </Button>
      </CardActions>

      <Dialog open={open} onClose={handleClose}>
        <CheckoutForm />
      </Dialog>
    </Card>
  );
}

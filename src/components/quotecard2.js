import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckoutForm from "./checkoutform";
import Skeleton from "@mui/material/Skeleton";
import Dialog from "@mui/material/Dialog";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';


export default function Quotecard2({ quote }) {
	const rateinc = quote.rate_increases;
	const ageinc = quote.age_increases;
	const disc = quote.discounts;

	let plogo;

	// const prov = quote.company_base.parent_company_base.name;
	// console.log(prov);




	if (quote.company_base.parent_company_base.name === "AETNA GRP") {
		plogo = <img id="plogo" src={require("../assets/aetna-text-logo.png")} style={{ marginRight: "16px" }} alt="Aetna" />
	}

	if (quote.company_base.parent_company_base.name === "") {
		plogo = " ";
	}


	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);


	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const HtmlTooltip = styled(({ className, ...props }) => (
		<Tooltip {...props} classes={{ popper: className }} />
	))(({ theme }) => ({
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: "#111",
			
			boxShadow: theme.shadows[1],
		},
		[`& .${tooltipClasses.arrow}`]: {
			color: "#111",
		  },
	}));

	return (
		<Card sx={{ minWidth: 275, mb: 3 }}>

			<Grid item xs={12} sx={{ p: 2 }}>
				<Stack direction="row" spacing={3} sx={{ alignItems: "center", justifyContent: "space-between" }}>
					{loading ? (

						<Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
							{plogo}
							<Typography color="text.secondary" variant="subtitle2">
								Provider:
							</Typography>
							<Typography color="common.black" variant="subtitle1" sx={{fontSize: "1.1em"}}>
								<b>{quote.company_base.parent_company_base.name}</b>
							</Typography>
						</Stack>
					) : (
						<Skeleton
							variant="rectangle"
							animation="wave"
							height="3em"
							width="100%"
							sx={{ mb: 3 }}
						/>
					)}

					<Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
						<Typography color="text.secondary" variant="subtitle2">
							Premium:
						</Typography>

						<Typography color="common.black" variant="subtitle1" sx={{fontSize: "1.1em"}}>
							<b>${quote.rate.month / 100} /month</b>
						</Typography>
					</Stack>


				</Stack>
			</Grid>
			<Grid item xs={12}><Divider /></Grid>

			<CardContent>
				<Grid container spacing={3} id="quote-cards">

					<Grid item xs={4}>
						<Stack direction="column" spacing={2}>
							<Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
								<Typography color="text.secondary" variant="subtitle2">
									Ambest Rating:
								</Typography>
								<Typography color="text.primary" variant="body1" >
									{quote.company_base.ambest_rating}
								</Typography>
							</Stack>

							<Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
								<Typography color="text.secondary" variant="subtitle2">
									SP Rating:
								</Typography>
								<Typography color="text.primary" variant="body1">
									{quote.company_base.sp_rating}
								</Typography>
							</Stack>

							<Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
								<Typography color="text.secondary" variant="subtitle2">
									Years in the market:
								</Typography>
								<Typography color="text.primary" variant="body1">

									{2022 - quote.company_base.established_year}
								</Typography>

							</Stack>




						</Stack>
					</Grid>


					<Grid item xs={4}>
						<Stack direction="column" spacing={2}>


							<Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
								<Typography color="text.secondary" variant="subtitle2">
									Rate Type :
								</Typography>
								<Typography color="text.primary" variant="body1">
									{quote.rate_type}
								</Typography>
							</Stack>

							<Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
								<Typography color="text.secondary" variant="subtitle2">
									Discounts :{" "}
								</Typography>
								{disc.map((data, i) => (
									<Typography key={i} color="text.primary" variant="body1">
										{" "}
										{data.name} ({(data.value * 100).toString().substr(0, 4)}%)
									</Typography>
								))}
							</Stack>

							<Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
								<Typography color="text.secondary" variant="subtitle2">
									Effective Date:
								</Typography>
								<Typography color="text.primary" variant="body1">
									{quote.effective_date.substring(0, 10)}
								</Typography>

								<HtmlTooltip
									arrow
									title={
										<React.Fragment>
											<Typography color="common.white" variant="body1">
												ergreg ergerglerg e rgergerg
										</Typography>
										</React.Fragment>
									}
								>
									<IconButton size="small" sx={{ p: 0, color: "#999" }} aria-label="Rate increase history" component="span">
										<InfoOutlinedIcon />
									</IconButton>
									{/* <Button variant="text" endIcon={<InfoOutlinedIcon />}></Button> */}
								</HtmlTooltip>


							</Stack>



						</Stack>
					</Grid>

					<Grid item xs={4}>
						<Stack direction="column" spacing={2}>

							<Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>

								<Typography color="text.primary" >
									Rate Increase history
								</Typography>

								<HtmlTooltip
									arrow
									title={
										<React.Fragment>
											{rateinc.map((data, i) => (
												<Typography color="common.white" variant="body1" key={i} sx={{mb: 1}}>
													${(data.rate_increase * 100).toString().substr(0, 5)}{" "}
													<small style={{ color: "#999", fontWeight: 100 }}>
														on {data.date.substring(0, 10)}
													</small>
												</Typography>
											))}
										</React.Fragment>
									}
								>
									<IconButton size="small" sx={{ p: 0, color: "#999" }} aria-label="Rate increase history" component="span">
										<InfoOutlinedIcon />
									</IconButton>
									{/* <Button variant="text" endIcon={<InfoOutlinedIcon />}></Button> */}
								</HtmlTooltip>
							</Stack>


							<Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>

								<Typography color="text.primary" >
									Age Increase history
								</Typography>

								<HtmlTooltip
									arrow
									title={
										<React.Fragment >
											{ageinc.map((data, i) => (
												<Typography color="common.white" variant="body1" key={i} sx={{mb: 1}}>
													{(data * 100).toString().substr(0, 5)}
												</Typography>
											))}
										</React.Fragment>
									}
								>
									<IconButton size="small" sx={{ p: 0, color: "#999" }} aria-label="Rate increase history" component="span">
										<InfoOutlinedIcon />
									</IconButton>
									{/* <Button variant="text" endIcon={<InfoOutlinedIcon />}></Button> */}
								</HtmlTooltip>
							</Stack>

						</Stack>
					</Grid>
				</Grid>
			</CardContent>
			
			<CardActions sx={{ justifyContent: "flex-start", p:2 }}>


							

				<Stack direction="row" spacing={2}>
				

				<Button size="large"  color="secondary" variant="contained" onClick={handleClickOpen} disableElevation>
					View Price
				</Button>

				<Button  color="secondary" variant="outlined" onClick={handleClickOpen} disableElevation>
					Checkout or Add to Fav
				</Button>
				</Stack>
				

			</CardActions>

			<Dialog open={open} onClose={handleClose}>
				<CheckoutForm />
			</Dialog>
		</Card>
	);
}

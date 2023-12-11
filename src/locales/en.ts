/* eslint-disable max-lines */
export default {
    common: {
        allTypes: "All Types",
        search: "Search",
        filters: "Filters",
        applied: "Applied",
        searchPlaceholder: "Search...",
        resetFilter: "Reset Filters",
        filtersApplied: "Filters Applied",
        loading: "Loading...",
        refresh: "Refresh",
        edit: "Edit",
        update: "Update",
        renew: "Renew",
        review: "Review",
        unlist: "Unlist",
        report: "Report",
        delete: "Delete",
        activate: "Activate",
        deactivate: "Deactivate",
        viewAd: "View Advert",
        page: "Page {pageNumber}",
        created: "Created {ago}",
        new: "New",
        apply: "Apply",
        proceed: "Proceed",
        resetFilterBtn: "Reset Filters",
        createBtn: "Create New",
        updateProfile: "Update Profile",
        skip: "Skip",
        view: "View",
        or: "Or",
        active: "Active",
        inactive: "Inactive",
        notApplicable: "N/A",
        "results#zero": "No results found",
        "results#one": "1 result found",
        "results#other": "{count} results found",
    },
    breadcrumbs: {
        home: "Home",
        edit:"Edit",
        dashboard:"Dashboard",
        search: "Search",
        advert: "Advert",
        manageCache:"Manage Cache",
        manageSubscriptions:"Manage Subscriptions",
        manageAdverts:"Manage Adverts",
        profile:"Profile",
        updateProfile:"Update Profile",
        notifications:"Notifications",
        newSubscription:"New Subscription",
        mySubscriptions:"My Subscriptions",
        newListing: "New Advert",
        myAdverts:"My Adverts",
        advertItem:"Advert Item"
    },
    components: {
        search: {
            searchGrid: {
                hasFilterAndTitle: "Filtered by Title & Advanced filters",
                hasOnlyFilters: "Filtered results",
                hasOnlyTitleFilter: "Filtered by Title",
                noAdsTitle: "No adverts to display",
                noAdsSubTitle: "You can try refining or resetting your search criteria or check again later",
            },
        },
        common: {
            errorComponent: {
                genericTitle: "Oops, something went wrong",
                genericSubTitleWithReset: "But do not worry, you can either try refreshing this page or go back to our home page and start over.",
                genericSubTitle: "But do not worry, you can alway head to our home page and start over.",
                notFoundMessage: "Item is not available",
            },
        },
        contactUsForm: {
            toast: {
                loading: "Submitting contact us form",
                error: "Failed to submit your message. Please try again in a while",
                success: "Successfully submitted your message. Our team will get in touch with you soon.",
            },
            banner: {
                success: {
                    title: "Successfully submitted your message",
                    subTitle: "Our team will get in touch with you soon",
                },
                error: {
                    title: "Failed to submit form",
                    subTitle: "Oops, we encountered an unexpected error. Please try again in a while",
                },
            },
        },
        dashboardListings: {
            dashboardListingItem: {
                expiredOn: "Expires on {date}",
                price: "Price: {price}",
                location: "Location {location}",
            },
            dashboardListingList: {
                noAdsText: "No advertisements to display",
                noAdsSubText:
                    "By creating a new new advertisement, you have the opportunity to showcase the vehicle you want to sell to a wide audience.",
                noAdsSubTextWithFilters: "Try adjusting or resetting your search filters",
            },
        },
        dashboardSubscriptions: {
            noSubscriptionsTitle: "No subscriptions to display",
            noSubscriptionsDescWithFilter: "Try adjusting or resetting your search filters",
            noSubscriptionsDesc:
                "By creating a new subscription, you'll receive notifications about any new advertisements that match your interests.",
            criteria: "Criteria:",
            expiresOn: "Expires on:",
            manufacturedBetween: "Manufactured between",
            registeredBetween: "Registered between",
        },
        dashboardNotificationList: {
            noNotificationsText: "No notifications to display",
            noNotificationsSubTextWithFilters: "Try adjusting or resetting your search filters",
            noNotificationsSubText: "You do not have any notifications yet. Try checking out again later",
        },
        dashboardProfile: {
            closeAccount: "Close Account",
            incompleteProfileTitle: "Incomplete Profile",
            incompleteProfileDesc: "To enjoy a seamless experience, please take a moment to update your profile.",
            standardUser: "User",
            carDealer: "Car Dealership",
            adminUser: "Admin",
            contactDetailsText: "Contact Details",
            locationDetailsText: "Location Details",
        },
        modals: {
            closeAccountModal: {
                title: "Close user account",
                desc: "Are you sure you want to close your account. This action will permanently delete your account and is not reversible",
                btnText: "Close Account",
                toast: {
                    loading: "Closing user account...",
                    error: "Failed to closed user account. {error}",
                    success: "Successfully closed user account",
                },
            },
            countrySelectModal: {
                title: "Switch Country",
                desc: "Switching your country lets you see vehicle availability in diverse locations, broadening your options for finding the perfect vehicle.",
                countryRequired: "Country is required",
                toast: {
                    success: "Successfully switched to country {country}",
                },
            },
            deleteListingItemModal: {
                title: "Delete Advert",
                desc: "Are you sure you want to delete this advert? This action is not reversible.",
                toast: {
                    loading: "Deleting advert {listingTitle}...",
                    success: "Successfully deleted the Advert {listingTitle}",
                    error: "Failed to delete advert {listingTitle}. {error}",
                },
            },
            deleteSubscriptionModal: {
                title: "Delete Subscription",
                desc: "Are you sure you want to delete this advert subscription? This action is not reversible.",
                toast: {
                    loading: "Deleting subscription {displayName}...",
                    success: "Successfully deleted the subscription {displayName}",
                    error: "Failed to delete subscription {displayName}. {error}",
                },
            },
            newUserOnboardModal: {
                title: "Welcome {firstName}!",
                desc: "We're thrilled to have you on board and excited to help you find the perfect vehicle or connect with buyers if you're selling.",
                section1: {
                    title: "Set Up Your Profile",
                    desc: "Before we begin, please take a moment to complete your profile details",
                },
                section2: {
                    title: "Select Your Interests",
                    desc: "Please let us know what you are interested in",
                    buyingBtn: "Buying a Vehicle",
                    sellingBtn: "Selling a Vehicle",
                },
                section3: {
                    titleWithoutInterest: "Begin Your Journey",
                    title: "Begin Your Journey as a {interests}",
                    buyer: {
                        browseAdvertDesc: "Explore our extensive collection of verified vehicle advertisements",
                        browseAdvertBtn: "Browse Adverts",
                        createSubscriptionDesc:
                            "Subscribe to advertisements that interest you and receive notifications whenever new listings match your preferences",
                        createSubscriptionBtn: "Create Subscriptions",
                    },
                    seller: {
                        createAdvertDesc: "Create an advert for your vehicle and watch it sell in no time!",
                        createAdvertBtn: "Create an Advert",
                        browseAdvertDesc: "Explore existing vehicle advertisements",
                        browseAdvertBtn: "Browse Adverts",
                    },
                },
                footer: "Got Questions? We're here to help. Check out our {FAQs} or reach us out through our {contactUs} page",
            },
            profileUpdateModal: {
                toast: {
                    loading: "Updating the user profile...",
                    error: "Failed to update the user profile. {error}",
                    success: "Successfully updated the user profile",
                },
            },
            renewListingModal: {
                title: "Renew Advert",
                desc: "This listing advert will expire on {date}. Are you sure you want to renew the advert?",
                toast: {
                    loading: "Renewing advert {listingTitle}...",
                    error: "Failed to renew advert {listingTitle}. {error}",
                    success: "Successfully renewed the Advert {listingTitle}",
                },
            },
            reportListingModal: {
                title: "Report Advert",
                reportBtnText: "Report Advert",
                formMessagePlaceholder: "Additional details on why you are reporting this advert",
                formReasonLabel: "Reason",
                toast: {
                    loading: "Reporting advert {listingTitle}...",
                    error: "Failed to report advert {listingTitle}. {error}",
                    success: "Successfully reported the Advert {listingTitle}",
                },
            },
            reviewListingModal: {
                title: "Review Advert",
                formReviewStatusLabel: "Review Status",
                formReviewCommentLabel: "Review comment",
                formReviewCommentPlaceholder: "Additional details related to the advert review",
                submitButtonText: "Submit Review",
                toast: {
                    loading: "Submitting review for advert {listingTitle}...",
                    error: "Failed to update the status of the advert {listingTitle}. {error}",
                    success: "Successfully updated the status of the advert {listingTitle}",
                },
            },
            toggleSubscriptionActivationModal: {
                title: "{state} Subscription",
                activating: "Activating",
                deactivating: "Deactivating",
                deactivateDesc: "By deactivating the subscription, you will stop receiving notifications related to your subscription criteria",
                activateDesc:
                    "By Re-activating the subscription, you will start to receive notifications related to your subscription criteria until the subscription expiry date",
                formExpiryDateLabel: "Expiry date",
                toast: {
                    loading: "{state} subscription {displayName}...",
                    error: "Failed to update the status of the subscription {displayName}. {error}",
                    success: "Successfully updated the subscription {displayName}",
                },
            },
            unListListingModal: {
                title: "Unlist Advert",
                desc: "By Unlisting or withdrawing the advert, the advertisement will no longer be visible to the public.",
                formStatusLabel: "Status",
                toast: {
                    loading: "Unlisting advert {listingTitle}...",
                    error: "Failed to update the status of the advert {listingTitle}. {error}",
                    success: "Successfully updated the status of the advert {listingTitle}",
                },
            },
        },
        manageCache: {
            revalidateAllFeaturedListings: {
                buttonText: "Revalidate featured listings",
                toast: {
                    success: "Successfully revalidated featured listings",
                    error: "Failed to revalidate featured listings",
                },
            },
            revalidateAllPostedListings: {
                buttonText: "Revalidate all posted listings",
                toast: {
                    success: "Successfully revalidated all posted listings",
                    error: "Failed to revalidate all posted listings",
                },
            },
            revalidateCitiesAndStates: {
                buttonText: "Revalidate Cities & States",
                toast: {
                    success: "Successfully revalidated cities and states",
                    error: "Failed to revalidate cities and states",
                },
            },
            revalidateFeaturedListingsByCountry: {
                buttonText: "Revalidate featured listings by country",
                toast: {
                    success: "Successfully revalidated featured listings",
                    error: "Failed to revalidate featured listings",
                },
            },
            revalidateFeatures: {
                buttonText: "Revalidate Features",
                toast: {
                    success: "Successfully revalidated features",
                    error: "Failed to revalidate Features",
                },
            },
            revalidatePostedListingsByCountry: {
                buttonText: "Revalidate posted listings by country",
                toast: {
                    success: "Successfully revalidated posted listings",
                    error: "Failed to revalidate posted listings",
                },
            },
            revalidateRelatedListings: {
                buttonText: "Revalidate related listings",
                toast: {
                    success: "Successfully revalidated related listings",
                    error: "Failed to revalidate related listings",
                },
            },
            revalidateUserNotifications: {
                buttonText: "Revalidate user notifications",
                toast: {
                    success: "Successfully revalidated user notifications",
                    error: "Failed to revalidate user notifications",
                },
            },
            revalidateUserProfile: {
                buttonText: "Revalidate user profile details",
                toast: {
                    success: "Successfully revalidated user profile",
                    error: "Failed to revalidate user profile",
                },
            },
            revalidateVehicleBrands: {
                buttonText: "Revalidate Vehicle Brands",
                toast: {
                    success: "Successfully revalidated vehicle brands",
                    error: "Failed to revalidate vehicle brands",
                },
            },
        },
        forms: {
            listing: {
                create: {
                    toast: {
                        loading: "Creating new Advert for {title}...",
                        error: "Failed to create advert for {title}. {error}",
                        success:
                            "Your advertisement for {title}, has been successfully submitted for review. We will notify you once the review process is complete.",
                    },
                },
                edit: {
                    toast: {
                        loading: "Updating the Advert {title}...",
                        error: "Failed to update the advert {title}. {error}",
                        success: "Successfully updated the Advert {title}.",
                    },
                },
                imageUpload: {
                    unsupportedTypeToastMsg: "Unsupported file type",
                    setAsThumbnail: "Set as Thumbnail",
                    isThumbnail: "Thumbnail",
                    addImages: "Add Images",
                },
                form: {
                    incompleteProfileTitle: "Incomplete Profile",
                    incompleteProfileDesc: "Please update your profile to create an advertisement for your vehicle",
                    sections: {
                        keySpecifications: "Key Specifications",
                        otherDetails: "Other details",
                        images: "Images",
                        imageSectionTitle: "New Advert Image",
                        locationAndContact: "Location & Contact Details",
                        price: "Price Details",
                        features: "Features",
                        safetyTips: {
                            title: "Safety Tips",
                            desc: "Please prioritize safety. Avoid sharing sensitive information. A secure marketplace benefits us all.",
                            viewAllLink: "View all safety Tips",
                        },
                    },
                },
            },
            subscriptions: {
                create: {
                    toast: {
                        loading: "Creating new subscription {displayName}...",
                        error: "Failed to create subscription {displayName}. {error}",
                        success: "Successfully created a new subscription {displayName}.",
                    },
                },
                edit: {
                    toast: {
                        loading: "Updating the Subscription {displayName}...",
                        error: "Failed to update the Subscription {displayName}. {error}",
                        success: "Successfully updated the Subscription {displayName}.",
                    },
                },
                form: {
                    configurationsText: "Subscription Configurations",
                    keySpecificationsText: "Key Specifications",
                    manufacturedYearText: "Manufactured Year",
                    priceRangeText: "Price Range",
                    mileageRangeText: "Mileage Range",
                },
            },
            profile: {
                edit: {
                    toast: {
                        loading: "Updating the user profile...",
                        error: "Failed to update the user profile. {error}",
                        success: "Successfully updated the user profile",
                    },
                },
                form: {
                    LocationDetailsText: "Location Details",
                    userDetailsText: "User Details",
                    isDealershipText: "Are you a vehicle dealer or dealership?",
                },
            },
        },
        filters: {
            label: "Filters",
            resetBtn: "Reset Applied Filters",
            applyFilters: "Apply Filters",
            applyingFilters: "Applying Filters...",
        },
        listingDetails: {
            viewMore: "View More",
            viewMoreSimilarTo: "View advertisements that are similar to {title}`",
            changeCountryBtn: "Change Country",
            share: {
                buttonText: "Share",
                copyLink: " Copy Link",
                copySuccessToast: "Link successfully copied to clipboard",
                shareFB: "Share on Facebook",
                shareTwitter: "Share on Twitter",
                genericTwitterShareTitle: "Vehicle for Sales",
            },
            noFeaturesAvailable: "No features available",
            details: {
                email: "Email:",
                contactNum: "Contact Number:",
                carDealer: "Car Dealer",
                description: "Description",
                location: "Location",
                price: "Price",
                priceWithCode: "Price ({code})",
                negotiable: "Negotiable",
                keySpecs: "Key Specifications",
                features: "Features",
                seller: "Seller",
                safetyTips: "Safety Tips",
                safetyTipsDesc:
                    "Protect yourself online. Never share sensitive information like credit/debit card details and OTPs with third parties for a secure vehicle marketplace.",
                safetyTipsLink: "View all safety Tips",
                expiryText: "Advert will expire on {date}",
            },
        },
    },
    metadata:{
        manageCacheRoute:{
            title: "Targabay - Manage Subscriptions"
        },
        manageSubscriptionListRoute:{
            title: "Targabay - Manage Subscriptions"
        },
        editSubscriptionRoute:{
            title:"Targabay - Edit Subscription"
        },
        profileDetailsRoute:{
            title:"Targabay - My Profile"
        },
        profileEditRoute:{
            title:"Targabay - Update Profile"
        },
        notificationsRoute:{
            title:"Targabay - My Notifications"
        },
        createSubscriptionRoute:{
            title:"Targabay - Create new Subscription",
        },
        createListingRoute:{
            title:"Targabay - Create a New Listing",
        },
        editMySubscriptionRoute:{
            title:"Targabay - Edit My Subscription"
        },
        mySubscriptionList:{
            title: "Targabay - My Subscriptions"
        },
        editMyListing:{
            title: "Targabay - Edit My Advert"
        },
        myListings:{
            title: "Targabay - My Adverts"
        },
        myAdvertDetails:{
            title:"Targabay - My Advert Details"
        },
        editListing:{
            title:"Targabay - Edit Listing Item Details"
        },
        manageListings:{
            title:"Targabay - Manage Listing Adverts"
        },
        manageListingItem:{
            title:"Targabay - Manage Listing Item" 
        },
        aboutUsRoute:{
            title: "Targabay - About Us",
            desc: "Learn more about Targabay, the premier online marketplace for automotive enthusiasts. Discover our journey, mission, and commitment to providing a seamless platform for buying and selling cars, bikes, and more. Join us in the passion for all things automotive.",
        },
        contactUsRoute:{
            title: "Targabay - Contact Us",
            desc: "Get in touch with Targabay! Whether you have questions, feedback, or partnership inquiries, our team is here to assist you. Reach out to us for a seamless and personalized experience in your automotive journey. Contact Targabay – your go-to online marketplace for buying and selling cars, bikes, and more.",
        },
        cookiePolicyRoute:{
            title: "Targabay - Cookie Policy",
            desc: "Explore Targabay's Cookie Policy to understand how we use cookies and similar technologies on our online marketplace. Learn about the types of cookies we employ and how they enhance your experience. Discover how we prioritize your privacy while providing a seamless and secure platform for buying and selling cars, bikes, and more.",
        },
        faqsRoute:{
            title: "Targabay - Frequently Asked Questions",
            desc: "Find answers to common queries on Targabay's FAQ page. Explore comprehensive information about buying, selling, and navigating our online marketplace for cars, bikes, and more. Streamline your experience with insights into our policies, transactions, and everything you need to know. Targabay – Your go-to resource for a seamless automotive journey.",
        },
        privacyPolicyRoute:{
            title:"Targabay - Privacy Policy",
            desc:"Understand how Targabay prioritizes your privacy with our detailed Privacy Policy. Learn about the collection, use, and safeguarding of your personal information as you engage with our online marketplace. Explore our commitment to providing a secure and personalized platform for buying and selling cars, bikes, and more. Your trust is our priority at Targabay."
        },
        safetyTipsRoute:{
            title:"Targabay - Safety Tips",
            desc:"Explore Targabay's Safety Tips to ensure a secure and confident experience on our online marketplace. Discover valuable insights and guidelines for buying and selling cars, bikes, and more. Prioritize safety in every transaction with our expert tips and recommendations. Targabay – Your trusted destination for a safe and enjoyable automotive journey."
        },
        termsOfUseRoute:{
            title:"Targabay - Terms of Use",
            desc:"Review Targabay's Terms of Use to understand the guidelines governing your engagement with our online automotive marketplace. Learn about the rules, responsibilities, and agreements that ensure a fair and secure platform for buying and selling cars, bikes, and more. Targabay – Your trusted destination for transparent and mutually beneficial transactions in the world of vehicles."
        },
        whyChooseUsRoute:{
            title:"Targabay - Why Choose Us",
            desc:"Discover why Targabay stands out as your premier choice in the world of online automotive marketplaces. Explore our commitment to a seamless buying and selling experience for cars, bikes, and more. From a diverse vehicle selection to secure transactions, find out what sets Targabay apart and makes us the preferred destination for automotive enthusiasts."
        }
    },
    appRouter: {
        landingRoute: {
            header: { line1: "Drive", line2: "Your", line3: "Dreams" },
            subHeader: "Effortlessly buy or sell your vehicle on our seamless online marketplace.",
            viewAllTitle: "View All",
            viewAllSubtitle: "View all vehicle advertisements available at Targabay",
        },
        postedListItemRoute: {
            relatedAdvertsTitle: "Related Adverts",
            viewMoreTitle: "View More",
            viewMoreSubTitle: "View advertisements that are similar to {title}",
        },

  

        aboutUsRoute: {
            intro: "Welcome to Targabay, where automotive dreams come to life. Targabay is not just an online vehicle marketplace. it's a vibrant community and a gateway to an extraordinary world of cars. Our mission is to redefine your automotive experience by providing a seamless, transparent, and enjoyable platform for buyers and sellers alike.",
            ourMission: {
                title: "Our Mission",
                desc: "At Targabay, we're on a mission to reshape the automotive marketplace. We strive to simplify the process of buying and selling vehicles, offering a platform that prioritizes user experience, trust, and community engagement. Whether you're a first-time buyer, a collector, or a seller looking for the perfect match for your vehicle, Targabay is here to facilitate those connections.",
            },
            whatSetsUsApart: {
                title: "What Sets Us Apart",
                section1: {
                    title: "1. Unparalleled Selection",
                    content:
                        "Immerse yourself in a meticulously curated selection of vehicles that meet our stringent standards for quality and performance. From sleek modern models to timeless classics, Targabay offers a diverse array of options to suit every automotive taste.",
                },
                section2: {
                    title: "2. User-Friendly Experience",
                    content:
                        "Your journey with Targabay is designed to be intuitive and enjoyable. We understand the significance of buying or selling a vehicle, and our user-friendly interface ensures that every step of the process is straightforward, from browsing listings to sealing the deal.",
                },
                section3: {
                    title: "3. Trust and Security",
                    content:
                        "Trust is at the core of Targabay. Our platform prioritizes security, and we go the extra mile to verify listings, providing you with the confidence to buy or sell. Transparency is our commitment, fostering a community where every transaction is conducted with trust and security.",
                },
                section4: {
                    title: "4. Community-Centric Approach",
                    content:
                        "Targabay is more than a marketplace; it's a dynamic community of automotive enthusiasts. Join discussions, share experiences, and connect with like-minded individuals who share your passion for cars. Our community-centric approach extends beyond transactions, creating a space for shared experiences, advice, and a celebration of all things automotive.",
                },
            },
            ourTeam: {
                title: "Our Team",
                content:
                    "Behind the scenes at Targabay is a dedicated team of professionals who share a deep love for cars. From our tech experts ensuring the platform runs smoothly to our customer service team ready to assist you, each member is committed to making your experience exceptional. We are not just facilitating transactions; we're building connections and contributing to the stories that unfold in every vehicle transaction.",
            },
            joinUs: {
                title: "Join Us on the Journey",
                content:
                    "Whether you're here to find your dream car or to sell a vehicle that has been a part of your journey, we invite you to join us on this exciting adventure. Targabay is not just a marketplace; it's a destination for automotive enthusiasts looking to connect, explore, and drive their passions forward.",
            },
            thankYou: "Thank you for choosing Targabay. We look forward to being a part of your automotive story.",
        },
        contactUsRoute: {
            desc: "Please use the form below to reach out to us. We'll get back to you as soon as possible. You can also directly get in touch with us by dropping us a message at {email}. We value your inquiries and are committed to providing swift assistance.",
            additionalInfo: {
                section1: {
                    title: "Get in Touch",
                    content:
                        "Our team is committed to providing you with exceptional service and support. Whether you have a question, need assistance, or want to share your feedback, we're here for you.",
                },
                section2: {
                    title: "Customer Support Hours",
                    content: "Monday - Friday: 8.00 AM - 8.00 PM",
                    subTitle: "Our dedicated support team is available to assist you during the following hours:",
                },
                section3: {
                    title: "Frequently Asked Questions",
                    content: "Before reaching out, check our {faq} section for quick answers to common questions.",
                },
                section4: {
                    title: "Privacy Assurance",
                    content: "We respect your privacy. Your information will only be used for the purpose of responding to your inquiry.",
                },
            },
        },
        cookiePolicyRoute: {
            updatedTime: "Last Updated: 18/11/2023",
            intro: "This Cookie Policy explains how we use cookies and similar technologies on our online vehicle marketplace. By using Targabay, you agree to the use of cookies as described in this policy.",
            section1: {
                title: "1. What Are Cookies?",
                content:
                    "Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They are created by the website's server and can only be read by that server. Cookies serve various purposes, such as remembering your preferences, analyzing how you interact with the site, and delivering personalized content.",
            },
            section2: {
                title: "2. How We Use Cookies",
                subSection1: {
                    title: "2.1 Essential Cookies",
                    content:
                        "These cookies are necessary for the proper functioning of Targabay. They enable you to navigate our website and use its features, such as accessing secure areas or making transactions. Without these cookies, Targabay may not function properly.",
                },
                subSection2: {
                    title: "2.2 Performance Cookies",
                    content:
                        "We use performance cookies to collect information about how visitors use our website. This includes data such as the pages you visit most frequently, the type of device you use, and any error messages you encounter. This information helps us analyze and improve the performance of the website, enhance the user experience, and understand which pages are most and least popular.",
                },
                subSection3: {
                    title: "2.3 Functionality Cookies",
                    content:
                        "Functionality cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features. For example, they may remember your login details or the region you are in to provide you with locally relevant content.",
                },
                subSection4: {
                    title: "2.4 Advertising/Targeting Cookies",
                    content:
                        "These cookies are used to deliver advertisements that are more relevant to you and your interests. They may be placed on our website by advertising partners and help limit the number of times you see an advertisement. Additionally, they assist in measuring the effectiveness of our advertising campaigns.",
                },
            },
            section3: {
                title: "3. Third-Party Cookies",
                content:
                    "Targabay may use third-party services, such as analytics tools or advertising networks, which may set their own cookies. These cookies are governed by the privacy policies of the respective third parties. We do not have control over these cookies, and they are used to provide services such as analytics and targeted advertising.",
            },
            section4: {
                title: "4. Managing Cookies",
                content:
                    "Most web browsers allow you to control cookies through their settings preferences. You can typically find these settings in the 'Options' or 'Preferences' menu of your browser. However, please note that limiting the ability of websites to set cookies may affect your overall user experience, and certain features of Targabay may not function correctly.",
            },
            section5: {
                title: "5. Changes to This Cookie Policy",
                content:
                    "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and the 'Last Updated' date will be revised accordingly. We encourage you to check this page periodically for the latest information on our use of cookies.",
            },
            section6: {
                title: "6. Contact Us",
                content: "If you have any questions, concerns, or requests regarding this Cookie Policy, please contact us at {email}.",
            },
        },
        faqsRoute: {
            title: "Frequently Asked Questions",
            section1: {
                title: "About Targabay",
                question1: {
                    question: "1. What is Targabay?",
                    answer: "Targabay is an online marketplace dedicated to buying and selling vehicles. Our platform streamlines the process of connecting buyers and sellers, ensuring a smooth automotive transaction experience.",
                },
                question2: {
                    question: "2. How does Targabay work?",
                    answer: "Targabay facilitates the seamless buying and selling of vehicles through a user-friendly platform. Users can easily create listings, explore available vehicles, subscribe to new listing alerts that they are interested in and connect with potential buyers or sellers.",
                },
                question3: {
                    question: "3. Is Targabay free to use?",
                    answer: "Yes, creating an account and browsing listings on Targabay is free. However, certain premium features, like marking an advert as a featured advert for increased visibility, may have associated costs. Contact us for more details.",
                },
            },
            section2: {
                title: "Account and Listings",
                question1: {
                    question: "4. How do I create an account on Targabay?",
                    answer: "You can use social logins, such as your Google or Apple account, to easily sign up on Targabay. For a seamless experience, we recommend completing your profile details, especially for first-time users.",
                },
                question2: {
                    question: "5. Do I need an account to browse listings?",
                    answer: "No, you can browse vehicle listings without creating an account. However, signing up is necessary for creating adverts, subscribing to listings alerts, or accessing additional features.",
                },
                question3: {
                    question: "6. How do I create a listing to sell my vehicle on Targabay?",
                    answer: "To create a listing, log in to your Targabay account and click on the 'Post Your Advert' button. Provide the necessary details about your vehicle. The listing will only be publicly visible once reviewed and verified by us.",
                },
                question4: {
                    question: "7. How long will it take to verify the Advert?",
                    answer: "Adverts are typically verified within a few days to a week. You will receive an email notification once the advert has been reviewed.",
                },
                question5: {
                    question: "8. My advert was rejected. What do I need to do?,",
                    answer: "If your advert is rejected, you'll receive an email explaining the reasons. Update the advert as requested, and we'll re-review it for approval.",
                },
                question6: {
                    question: "9. How do I remove an advert?",
                    answer: "You can temporarily or permanently remove an advert from your dashboard. If the vehicle is sold, you can also mark the advert as sold.",
                },
                question7: {
                    question: "10. My advert is no longer visible publicly.",
                    answer: "Adverts are removed from public visibility when they expire. You'll receive a notification from us for this. You can renew the advert if needed.",
                },
                question8: {
                    question: "11. Are there any fees for selling my vehicle on Targabay?",
                    answer: "Currently, all features and services on Targabay are free of charge. However, please note that there may be additional costs in the future for certain premium features, such as marking an advert as a featured advert.",
                },
            },
            section3: {
                title: "Security and Support",
                question1: {
                    question: "12. Is my personal information safe on Targabay?",
                    answer: "Targabay prioritizes the security and privacy of your information. Refer to our {privacyPolicy} for detailed information on how we handle and protect your data.",
                },
                question2: {
                    question: "13. What safety measures are in place to prevent fraud on Targabay?",
                    answer: "Targabay employs advanced security measures to detect and prevent fraudulent activity. Report any suspicious behavior to our support team immediately.",
                },
                question3: {
                    question: "14. How can I get in touch with Targabay support?",
                    answer: "For inquiries or assistance, visit our {contactUs} page or email {email}. Our support team is ready to help you.",
                },
                question4: {
                    question: "15. What are listing subscriptions?",
                    answer: "Listing subscriptions allow users to subscribe to listings matching their interests. Users define notification frequency and receive updates on new listings.",
                },
                question5: {
                    question: "16. How do I create subscriptions and be notified of new listings?",
                    answer: "Log in to Targabay, visit the subscriptions tab in your dashboard, click on the new subscription button, enter your criteria, and create a new subscription.",
                },
                question6: {
                    question: "17. How do I update the contact details within the advert I've created?",
                    answer: "Update your contact details on the edit advert or update profile pages within your dashboard. Save changes on the update advert page.",
                },
                question7: {
                    question: "18. How do I report an advert?",
                    answer: "Visit the advert, click the report button, provide reasons, and submit your request. Our team will review and take necessary actions.",
                },
                question8: {
                    question: "19. How are adverts verified?",
                    answer: "Our team reviews advert details for integrity and accuracy. Approved listings meet our standards; rejected ones are explained with reasons.",
                },
                question9: {
                    question: "20. What are featured adverts?",
                    answer: "Featured adverts are prominently displayed on Targabay's homepage, grabbing users' attention easily. These adverts will also be given prominence when use",
                },
                question10: {
                    question: "21. How do I make one of my advertisements a featured advert?",
                    answer: "The option to feature an advert will be available on the listing details page. However, there will be limitations on the duration and frequency of featuring.",
                },
            },
            section4: {
                title: "Additional Tips and Queries",
                question1: {
                    question: "22. What precautions should I take when using Targabay?",
                    answer: "Refer to our instructions on the {safetyTips} page for essential guidelines.",
                },
                question2: {
                    question: "23. How can I get more responses to my ad?",
                    answer: "Make your listing advert attractive with clear images and detailed descriptions. Consider promoting your advert or converting it into a featured advert for more visibility.",
                },
                question3: {
                    question: "24. Why has my ad been rejected?",
                    answer: "Adverts are rejected if they violate posting rules. Please refer to the rejection email for the specific changes required. Once you've updated the advert as per our request, we will review it again and approve it if it meets our expectations.",
                },
                question4: {
                    question: "25. I have an inquiry or complaint. How should I get in touch with Targabay?",
                    answer: "If you have any inquiries or complaints, please don't hesitate to reach out to us. You can use the {contactUs} form on our website or email us at {email}. Our dedicated support team is always here to assist you.",
                },
            },
        },
        privacyPolicyRoute: {
            updatedTime: "Last Updated: 18/11/2023",
            intro: "This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our online vehicle marketplace. By accessing or using Targabay, you agree to the terms of this Privacy Policy.",
            section1: {
                title: "1. Information We Collect",
                subSection1: {
                    title: "1.1 Personal Information",
                    desc: "We collect personal information that you voluntarily provide when you create an account, update your profile, or engage in transactions on Targabay. This information may include, but is not limited to:",
                    items: [
                        "Name: To personalize your Targabay experience.",
                        "Email address: For communication and account verification.",
                        "Contact information: Facilitate transactions and provide customer support.",
                        "Profile details: Enhance your user experience on the platform.",
                    ],
                },
                subSection2: {
                    title: "1.2 Automatically Collected Information",
                    desc: "We may automatically collect certain information when you use Targabay, including:",
                    items: [
                        "Device information: Understand the devices accessing Targabay for optimization.",
                        "Usage data: Analyze how users interact with the platform for improvements.",
                        "Cookies and similar technologies: Enhance user experience and track preferences. For more details on how we use cookies, please refer to our {cookiePolicy}.",
                    ],
                },
            },
            section2: {
                title: "2. How We Use Your Information",
                desc: "We use the collected information for the following purposes:",
                subSection1: {
                    title: "2.1 Providing and Improving Services",
                    items: [
                        "Facilitating transactions between buyers and sellers by sharing necessary information.",
                        "Enhancing and customizing user experience based on preferences.",
                        "Developing new features and services to improve the platform.",
                    ],
                },
                subSection2: {
                    title: "2.2 Communication",
                    items: [
                        "Sending transaction notifications to keep users informed about their activities on Targabay.",
                        "Providing customer support and responding to inquiries.",
                        "Sending promotional and marketing communications (with user consent) to keep users informed about new features and promotions.",
                    ],
                },
                subSection3: {
                    title: "2.3 Legal Compliance",
                    items: [
                        "Complying with legal obligations and responding to law enforcement requests.",
                        "Enforcing our Terms of Use to ensure a secure and trustworthy platform.",
                    ],
                },
            },
            section3: {
                title: "3. Information Sharing",
                desc: "We may share your information with:",
                items: [
                    "Other users as necessary for transactions to occur.",
                    "Third-party service providers assisting in platform operations, such as payment processors.",
                    "Legal authorities to comply with legal requirements.",
                ],
            },
            section4: {
                title: "4. Data Security",
                desc: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include encryption, secure server configurations, and routine security assessments.",
            },
            section5: {
                title: "5. Your Choices",
                subSection1: {
                    title: "5.1 Account Information",
                    content: "You can update or delete your account information at any time through the account settings on Targabay.",
                },
                subSection2: {
                    title: "5.2 Marketing Communications",
                    content: "You can opt out of receiving promotional emails by following the unsubscribe instructions included in the emails.",
                },
            },
            section6: {
                title: "6. Third-Party Links and Services",
                desc: "Targabay may contain links to third-party websites or services. We are not responsible for their privacy practices, and we encourage you to review their privacy policies before interacting with them.",
            },
            section7: {
                title: "7. Children's Privacy",
                desc: "Targabay is not directed to individuals under the age of 13. If you are aware that a child under 13 has provided us with personal information, please contact us, and we will take steps to delete such information.",
            },
            section8: {
                title: "8. Changes to this Privacy Policy",
                desc: "We may update this Privacy Policy periodically. We will notify users of any material changes by posting the updated policy on Targabay and updating the 'Last Updated' date.",
            },
            section9: {
                title: "9. Contact Us",
                desc: "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at {email}.",
            },
        },
        safetyTipsRoute: {
            desc: "At Targabay, your safety is our priority. We are committed to providing a secure online marketplace. Please follow these safety tips for a worry-free experience.",
            section1: {
                title: "General Safety Tips",
                subSection1: {
                    title: "Meet in Safe Locations",
                    items: [
                        "Arrange to meet in public places, such as shopping centers or police stations, especially during daylight hours.",
                        "Opt for well-lit areas with surveillance cameras for added security.",
                    ],
                },
                subSection2: {
                    title: "Bring a Friend",
                    items: ["Whenever possible, bring a friend or family member with you when meeting a buyer or seller."],
                },
                subSection3: {
                    title: "Verify Identity",
                    items: [
                        "Before meeting, verify the identity of the other party by reaching them out via email or contact number",
                        "Share contact information responsibly, and ensure it aligns with the details provided on Targabay.",
                    ],
                },
            },
            section2: {
                title: "Tips for Buyers",
                subSection1: {
                    title: "Research the Vehicle",
                    items: [
                        "Thoroughly research the vehicle by checking its specifications, reviews, and market value.",
                        "Access and review the vehicle history report to make an informed decision.",
                    ],
                },
                subSection2: {
                    title: "Inspect the Vehicle in Person",
                    items: [
                        "Schedule a meeting to inspect the vehicle in person before finalizing the transaction.",
                        "Utilize our detailed inspection checklist to ensure all aspects are thoroughly examined.",
                    ],
                },
                subSection3: {
                    title: "Report Suspicious Activity",
                    items: [
                        "If you come across any listings that raise suspicion of potential scams, please promptly report them to us. Your vigilance is crucial in maintaining a secure environment on Targabay. We are committed to investigating and taking the necessary actions to ensure the safety and integrity of our marketplace.",
                    ],
                },
            },
            section3: {
                title: "Tips for Sellers",
                subSection1: {
                    title: "Provide Accurate Information",
                    items: [
                        "Build trust with potential buyers by providing accurate and detailed information about the vehicle.",
                        "Upload clear and high-quality images to showcase the condition of the vehicle accurately.",
                    ],
                },
                subSection2: {
                    title: "Set Clear Terms",
                    items: [
                        "Clearly outline the terms and conditions of the sale in your listing.",
                        "Take your time when negotiating and avoid making impulsive decisions that may impact the transaction.",
                    ],
                },
                subSection3: {
                    title: "Use Secure Payment Methods",
                    items: [
                        "For the safety of sellers, it is strongly advised to utilize secure payment methods to prevent potential scams.",
                        "Sellers should exercise caution and refrain from sharing sensitive financial information without thorough verification to ensure a secure and trustworthy transaction process.",
                    ],
                },
            },
            section4: {
                title: "Safety measures provided by Targabay",
                subSection1: {
                    title: "Continuous improvements",
                    items: ["We make constant improvements to our technology to detect and prevent suspicious or inappropriate activity."],
                },
            },
            section5: {
                title: "Reporting a safety issue",
                subSection1: {
                    title: "Victim of a scam?",
                    items: [
                        "If you feel that you have been the victim of a scam, please report your situation to us immediately.",
                        "If you have been cheated, we also recommend that you contact your local police department.",
                    ],
                },
                subSection2: {
                    title: "Information sharing",
                    items: [
                        "Targabay is committed to the privacy of our users and does not share user information publicly. However, we take safety seriously and will cooperate with law enforcement if we receive requests regarding fraudulent or other criminal activity.",
                    ],
                },
            },
        },
        termsOfUseRoute: {
            updatedTime: "Last Updated: 18/11/2023",
            intro: "By accessing and using our online vehicle marketplace, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use Targabay.",
            section1: {
                title: "1. User Agreement",
                desc: "By using Targabay, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you are using the platform on behalf of a business or other legal entity, you represent that you have the authority to bind that entity to these terms.",
            },
            section2: {
                title: "2. Account Creation and Security",
                subSection1: {
                    title: "2.1 Account Creation",
                    content:
                        "To access certain features of Targabay, such as creating listings or subscriptions, you may be required to log in. Targabay provides the convenience of social logins, including options like Google, to streamline the login process. During your first-ever login, you will be asked to complete your profile details. Please provide this information to ensure a seamless experience with Targabay.",
                },
                subSection2: {
                    title: "2.2 Account Security",
                    content:
                        "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account or any other breach of security.",
                },
                subSection3: {
                    title: "2.3 Account Termination",
                    content:
                        "Targabay reserves the right to terminate or suspend accounts that violate these Terms of Use. Users may appeal account decisions by contacting us. Users also have the right to close their account voluntarily. If you wish to close your account, please reach out to us through the designated contact channels or follow the account closure procedures available on the platform.",
                },
            },
            section3: {
                title: "3. Listings and Selling",
                subSection1: {
                    title: "3.1 Listing Policies",
                    content:
                        "Users may list vehicles for sale on Targabay, subject to our listing policies. By creating a listing, you agree to provide accurate and truthful information about the vehicle.",
                },
                subSection2: {
                    title: "3.2 Transaction Process",
                    content:
                        "Users selling vehicles are responsible for carrying out the transactions with the buyer on their own. Targabay facilitates the connection between buyers and sellers but is not responsible for the actual transaction process. Sellers must adhere to the terms specified in their listings and conduct transactions in accordance with applicable laws. Targabay is not responsible for any disputes that may arise between buyers and sellers, and users are encouraged to resolve issues amicably. If disputes cannot be resolved, users may refer to our {safetyTips} for guidance or contact us if needed.",
                },
            },
            section4: {
                title: "4. Buying",
                desc: "When purchasing a vehicle on Targabay, users agree to:",
                subSection1: {
                    title: "4.1 Payment",
                    content:
                        "Buyers are responsible for making payments to sellers in a secure manner. Targabay is not involved in the payment process and does not hold any responsibility for financial transactions between buyers and sellers.",
                },
                subSection2: {
                    title: "4.2 Disputes",
                    content:
                        "Targabay is not responsible for any disputes that may arise between buyers and sellers during or after the transaction. Users are encouraged to communicate effectively and resolve issues amicably. In case disputes cannot be resolved, users may refer to our {safetyTips} for guidance or contact us if needed.",
                },
            },
            section5: {
                title: "5. Prohibited Activities",
                desc: "Users are prohibited from engaging in activities that violate applicable laws or these Terms of Use. Prohibited activities include but are not limited to:",
                subSection1: {
                    title: "5.1 Fraud",
                    content: "Any form of fraudulent activity, including misrepresentation of vehicle details.",
                },
                subSection2: {
                    title: "5.2 Illegal Activities",
                    content: "Engaging in any illegal activities through the use of Targabay.",
                },
            },
            section6: {
                title: "6. Intellectual Property",
                desc: "Targabay retains ownership of all intellectual property rights related to the platform, including but not limited to:",
                subSection1: {
                    title: "6.1 Trademarks",
                    content: "Targabay's name, logos, and any other trademarks associated with the platform.",
                },
                subSection2: {
                    title: "6.2 Content",
                    content: {
                        line1: "All content provided on the platform, including text, images, and graphics.",
                        line2: "Users are not authorized to use Targabay's branding or content without explicit permission.",
                    },
                },
            },
            section7: {
                title: "7. Privacy Policy",
                desc: "By using Targabay, you agree to the terms outlined in our {privacyPolicy}, which details the collection, use, and protection of user data.",
            },
            section8: {
                title: "8. Termination of Accounts",
                desc1: "Targabay reserves the right to terminate or suspend user accounts for violations of these Terms of Use. Users may appeal account decisions by contacting us. Users also have the right to close their account voluntarily.",
                desc2: "If you wish to close your account, please reach out to us through the designated contact channels or follow the account closure procedures available on the platform.",
            },
            section9: {
                title: "9. Limitation of Liability",
                subSection1: {
                    title: "9.1 Disclaimer",
                    content:
                        "Targabay is not liable for any damages arising from the use of the platform. We do not warrant the accuracy, completeness, or usefulness of information on the platform.",
                },
                subSection2: {
                    title: "9.2 Indemnification",
                    content: "Users agree to indemnify and hold Targabay and its affiliates harmless from any claims, losses, or damages.",
                },
            },
            section10: {
                title: "10. Changes to Terms",
                desc: "Targabay may update these Terms of Use from time to time. Users will be notified of any changes, and continued use of the platform constitutes acceptance of the revised terms.",
            },
        },
        whyChooseUsRoute: {
            section1: {
                title: "Confidence in Every Detail",
                content:
                    "Rest assured that every vehicle listing on our platform undergoes a thorough verification process, providing you with accurate and reliable information about the condition, history, and specifications of each vehicle.",
            },
            section2: {
                title: "Simplify Your Vehicle Buying Experience",
                content:
                    "We believe in keeping things simple and transparent. Our user-friendly interface and intuitive search tools make it easy for you to navigate, compare, and make informed decisions, saving you time and effort in your vehicle buying journey",
            },
            section3: {
                title: "Enjoy the Benefits Without Any Fees",
                content:
                    "We provide our services at no cost to you. You can access our wide selection, verified listings, and user-friendly platform without incurring any fees, making it even more convenient for you to find your dream vehicle.",
            },
            section4: {
                title: "Responsive Customer Support",
                content:
                    "Our dedicated customer support team is here for you at every step of your buying or selling journey. Whether you have questions, need assistance, or encounter any issues, count on us for timely and helpful support to ensure a smooth and confident experience",
            },
            section5: {
                title: "Comprehensive Search Filters",
                content:
                    "Refine your search effortlessly using our extensive range of filters. From specific brands and models to preferred price ranges and mileage limits, our comprehensive search options empower you to discover the perfect vehicle that aligns precisely with your preferences.",
            },
            section6: {
                title: "Personalized Advert Alerts",
                content:
                    "Stay effortlessly informed about car advertisements that match your interests. Customize your preferences and receive personalized alerts, ensuring you're always updated on relevant listings.",
            },
        },
    },
    form: {
        title: { label: "Title", placeholder: "Advert Title" },
        name: { label: "Name", placeholder: "Enter your name" },
        email: { label: "Email", placeholder: "user@email.com" },
        phoneNumber: { label: "Phone Number", placeholder: "0000000000" },
        subject: { label: "Subject", placeholder: "Briefly describe the purpose of your message or inquiry" },
        message: { label: "Message", placeholder: "Type your message or inquiry..." },
        country: { label: "Country", placeholder: "Select Country" },
        state: { label: "State/Province", placeholder: "State or Province Name" },
        city: { label: "City", placeholder: "City Name" },
        postalCode: { label: "Postal Code", placeholder: "00001" },
        brand: { label: "Brand", placeholder: "Toyota, Nissan, Honda, etc" },
        model: { label: "Model", placeholder: "Civic, Sunny, Swift, etc" },
        trim: { label: "Trim", placeholder: "LX, EX, EX-L, Sport, etc" },
        minPrice: { label: "Minimum Price", placeholder: "Minimum price", placeholderNum: "1,000,000" },
        price: { label: "Price", placeholder: "40,000,000" },
        maxPrice: { label: "Maximum Price", placeholder: "Maximum Price", placeholderNum: "10,000,000" },
        priceNegotiable: { label: "Is the price negotiable?" },
        yomStartDate: { label: "Manufactured After", placeholder: "Manufactured after date", placeholderYear: "1990" },
        yom: { label: "Year of Manufacture", placeholder: "2000" },
        yomEndDate: { label: "Manufactured Before", placeholder: "Manufactured before date", placeholderYear: "2000" },
        vehicleType: { label: "Vehicle Type", placeholder: "Select Type", optionalPlaceholder: "All Types" },
        fuelType: { label: "Fuel Type", placeholder: "Select Fuel Type", optionalPlaceholder: "All fuel types" },
        condition: { label: "Vehicle Condition", placeholder: "Select Condition", optionalPlaceholder: "All" },
        transmissionType: { label: "Transmission Type", placeholder: "Select Type", optionalPlaceholder: "All Types" },
        listingId: { label: "Listing ID", placeholder: "Listing ID" },
        userId: { label: "User ID", placeholder: "User ID" },
        yearOfRegistrationStart: { label: "Registered after", placeholderYear: "2010" },
        yearOfRegistration: { label: "Year of Registration", placeholder: "2010" },
        yearOfRegistrationEnd: { label: "Registered before", placeholder: "2020" },
        mileageMin: { label: "Minimum Mileage", placeholderNum: "10,000" },
        mileage: { label: "Mileage", placeholder: "50,000" },
        mileageMax: { label: "Maximum Mileage", placeholder: "1,000,000" },
        engineCapacity: { label: "Engine Capacity", placeholder: "1,500" },
        listingDescription: {
            label: "Description",
            placeholder:
                "Share more about your vehicle. Highlight its unique features, history, or any additional information that would help potential buyers make an informed decision.",
        },
        listingStatus: { label: "Status", optionalPlaceholder: "All status types" },
        startCreatedDate: { label: "Created After", placeholder: " Created after date" },
        endCreatedDate: { label: "Created Before", placeholder: "Created before date" },
        subscriptionDisplayName: { label: "Display Name", placeholder: "Name of the subscription" },
        subscriptionFrequency: { label: "Notification Frequency", placeholder: "Select Frequency", optionalPlaceholder: "All frequencies" },
        subscriptionExpiry: { label: "Subscription expiry date", placeholder: "01/01/2025" },
        subscriptionActive: { label: "Active/Inactive", optionalPlaceholder: "All status types" },
        notificationIsShown: { label: "Type", optionalPlaceholder: "All Notifications", new: "New Notifications", seen: "Seen Notifications" },
        startNotifications: { label: "From", placeholder: "Notifications from date" },
        endNotifications: { label: "To", placeholder: "Notifications to date" },
        buttons: {
            submit: { label: "Submit", loading: "Submitting" },
            create: { label: "Create", loading: "Creating" },
            update: { label: "Update", loading: "Updating" },
        },
    },
    nav: {
        home: "Home",
        login: "Login",
        profile: "Profile",
        notifications: "Notifications",
        myListing: "My Adverts",
        mySubscriptions: "My Subscriptions",
        manageListings: "Manage Adverts",
        manageSubscriptions: "Manage Subscriptions",
        manageCache: "Manage Cache",
        logout: "Logout",
        postYourAdvert: "Post Your Advert",
        footerSubtitle: "Connecting Car Enthusiasts since 2023",
        adminFunctions: "Admin functions",
        links: {
            social: { title: "Social", facebook: "Facebook", instagram: "Instagram" },
            company: { title: "Company", aboutUs: "About Us", whyChooseUs: "Why Choose Us" },
            support: { title: "Support", contactUs: "Contact Us", safetyTips: "Safety Tips", faqs: "FAQs" },
            legal: { title: "Legal", termsOfUse: "Terms Of Use", privacyPolicy: "Privacy Policy", cookiePolicy: "Cookie Policy" },
        },
    },   
} as const;

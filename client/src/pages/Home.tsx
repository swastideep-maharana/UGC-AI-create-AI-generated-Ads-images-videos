import HeroSection from "../sections/hero-section";
import FaqSection from "../sections/faq-section";
import Features from "../sections/features";
import WorkflowSteps from "../sections/workflow-steps";
import Testimonials from "../sections/testimonials";
import PricingPlans from "../sections/pricing-plans";
import CallToAction from "../sections/call-to-action";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <WorkflowSteps />
            <Testimonials />
            <FaqSection />
            <PricingPlans />
            <CallToAction />
        </>
    );
}

import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen pt-20">
            <SignUp 
                routing="path" 
                path="/sign-up" 
                signInUrl="/sign-in"
                appearance={{
                    elements: {
                        formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-sm normal-case',
                    }
                }}
            />
        </div>
    );
};

export default SignUpPage;

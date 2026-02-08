import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen pt-20">
            <SignIn 
                routing="path" 
                path="/sign-in" 
                signUpUrl="/sign-up"
                appearance={{
                    elements: {
                        formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-sm normal-case',
                    }
                }}
            />
        </div>
    );
};

export default SignInPage;

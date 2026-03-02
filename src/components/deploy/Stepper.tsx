"use client";

import { motion } from "framer-motion";

interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {steps.map((step, index) => {
        const isActive = step.number === currentStep;
        const isCompleted = step.number < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.number} className="flex items-center">
            <motion.button
              onClick={() => onStepClick(step.number)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 focus:outline-none"
            >
              {/* 步骤圆圈 */}
              <motion.div
                animate={{
                  backgroundColor: isActive 
                    ? "#f97316" 
                    : isCompleted 
                      ? "#22c55e" 
                      : "var(--orange-50)",
                  borderColor: isActive 
                    ? "#f97316" 
                    : isCompleted 
                      ? "#22c55e" 
                      : "var(--border)",
                }}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors duration-300"
                style={{
                  color: isActive || isCompleted ? "white" : "var(--orange-600)",
                }}
              >
                {isCompleted ? (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                ) : (
                  step.number
                )}
              </motion.div>

              {/* 步骤标签 */}
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-orange-600"
                    : isCompleted
                    ? "text-green-600"
                    : "text-foreground-muted"
                }`}
              >
                {step.label}
              </span>
            </motion.button>

            {/* 连接线 */}
            {!isLast && (
              <motion.div
                className="w-16 h-0.5 mx-4"
                animate={{
                  backgroundColor: isCompleted ? "#22c55e" : "var(--border)",
                }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

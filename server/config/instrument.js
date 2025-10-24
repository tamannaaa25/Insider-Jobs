// server.js (or your Sentry setup file)

// 🛑 REMOVE THIS IMPORT
// import { nodeProfilingIntegration } from "@sentry/profiling-node"; 
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://19550cafebc1034393d4d4bd09abbaa5@o4508709142331392.ingest.us.sentry.io/4508709145214976",
  integrations: [
    // 🛑 REMOVE THIS LINE
    // nodeProfilingIntegration(), 
    Sentry.mongooseIntegration()
  ],
  // Tracing
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
});

// 🛑 REMOVE THIS BLOCK
// Manually call startProfiler and stopProfiler
// to profile the code in between
// Sentry.profiler.startProfiler();

// Starts a transaction that will also be profiled
Sentry.startSpan({
  name: "My First Transaction",
}, () => {
  // the code executing inside the transaction will be wrapped in a span and profiled
});

// 🛑 REMOVE THIS LINE
// Calls to stopProfiling are optional - if you don't stop the profiler, it will keep profiling
// your application until the process exits or stopProfiling is called.
// Sentry.profiler.stopProfiler();